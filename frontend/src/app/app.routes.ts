import { Routes } from '@angular/router';
import { ChildrenProfileComponent } from './components/pages/children-profile/children-profile.component';

export const routes: Routes = [
  {
    path: 'children-page/:id',
    component: ChildrenProfileComponent,
    title: 'Children Profile',
  },
];
