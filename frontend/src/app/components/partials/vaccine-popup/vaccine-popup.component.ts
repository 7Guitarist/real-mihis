import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from '../../../shared/models/child';

@Component({
  selector: 'app-vaccine-popup',
  standalone: true,
  imports: [],
  templateUrl: './vaccine-popup.component.html',
  styleUrl: './vaccine-popup.component.css',
})
export class VaccinePopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public child: Child) {}
}
