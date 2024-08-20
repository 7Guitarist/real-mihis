import { Injectable } from '@angular/core';
import { Child } from '../shared/models/child';
import { child } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  constructor() {}

  getAll(): Child[] {
    return child;
  }

  getAllChildrenBySearchTerm(searchTerm: string) {
    return this.getAll().filter((child) =>
      child.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
