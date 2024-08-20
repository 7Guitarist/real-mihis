import { Vaccination } from './vaccination';
import { WeighingHistory } from './weighing-history';

export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  purok: string;
  gender: string;
  weight: number;
  height: number;
  // dateOfBirth: Date;
  barangay: string;
  dateOfBirth: string;
  photoPath: string;
  vaccinations: Vaccination[];
  isFullyVaccinated: boolean;
  // dateFullyVaccinated: Date;
  dateFullyVaccinated: string;
  weighingHistory: WeighingHistory[];
}
