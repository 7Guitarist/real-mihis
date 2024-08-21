import { Component } from '@angular/core';
import { FooterComponent } from '../../partials/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Child } from '../../../shared/models/child';
import { ChildService } from '../../../services/child.service';

@Component({
  selector: 'app-children-profile',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    FooterComponent,
    RouterLink,
    FooterComponent,
  ],
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
        this.child = childrenService.getChildrenById(params['id']);
    });
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
}
