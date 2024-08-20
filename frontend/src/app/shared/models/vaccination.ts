export interface Vaccination {
  vaccineType: string;
  doseNumber: string;
  placeOfVaccination: string;
  // dateOfVaccination: Date;
  dateOfVaccination: string;
  midwifeId: string; // Reference to User (Midwife)
  bhwId: string; // Reference to User (BHW)
}
