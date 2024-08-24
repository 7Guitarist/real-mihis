import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Child } from '../../../shared/models/child';
import { ChildService } from '../../../services/child.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-children-profile',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, RouterLink, CommonModule],
  templateUrl: './children-profile.component.html',
  styleUrl: './children-profile.component.css',
})
export class ChildrenProfileComponent {
  // Align the tooltip at top center
  vaccineCount = 'Number of Vaccine Administered / Total Required Vaccine';
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  child!: Child;
  constructor(activatedRoute: ActivatedRoute, childrenService: ChildService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        childrenService
          .getChildrenById(params['id'])
          .subscribe((serverChild) => {
            this.child = serverChild;
          });
    });
  }

  // Vaccination

  getVaccinationStatus(child: Child): string {
    if (child.isFullyVaccinated) {
      return 'Fully Vaccinated';
    } else if (child.vaccinations.length > 0) {
      return 'Partially Vaccinated';
    } else {
      return 'Not Vaccinated';
    }
  }

  getAgeInMonths(dateOfBirth: string): number {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    const ageInMonths =
      (now.getFullYear() - dob.getFullYear()) * 12 +
      (now.getMonth() - dob.getMonth());
    return ageInMonths;
  }

  countVaccinations(child: Child): number {
    const oneYearAfterBirth = new Date(child.dateOfBirth);
    oneYearAfterBirth.setFullYear(oneYearAfterBirth.getFullYear() + 1);

    return child.vaccinations.filter((vaccine) => {
      const vaccineDate = new Date(vaccine.dateOfVaccination);
      return (
        vaccineDate >= new Date(child.dateOfBirth) &&
        vaccineDate <= oneYearAfterBirth
      );
    }).length;
  }

  // Weighing
  getLatestWeighing(child: Child) {
    return child.weighingHistory.reduce((latest, entry) => {
      return new Date(entry.date) > new Date(latest.date) ? entry : latest;
    }, child.weighingHistory[0]);
  }

  getNutritionalStatus(latestWeighing: any): string {
    const {
      weightForAgeStatus,
      heightForAgeStatus,
      weightForLengthHeightStatus,
    } = latestWeighing;

    const statuses = [
      weightForAgeStatus,
      heightForAgeStatus,
      weightForLengthHeightStatus,
    ];
    const normalCount = statuses.filter((status) => status === 'Normal').length;

    if (normalCount === 3) {
      return 'Normal';
    } else if (normalCount === 1) {
      return 'Malnourished';
    } else {
      return 'At risk';
    }
  }
}
