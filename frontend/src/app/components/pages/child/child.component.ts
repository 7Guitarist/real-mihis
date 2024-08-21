import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Child } from '../../../shared/models/child';
import { ChildService } from '../../../services/child.service';
import { FooterComponent } from '../../partials/footer/footer.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatIconModule,
    FooterComponent,
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  child: Child[] = [];

  private childService = inject(ChildService);

  constructor() {
    this.child = this.childService.getAll();
  }

  search(searchTerm: string) {
    this.child = this.childService.getAllChildrenBySearchTerm(searchTerm);
  }
}
