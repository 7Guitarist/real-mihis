export interface Vaccination {
  vaccineType: string;
  doseNumber: string;
  placeOfVaccination: string;
  dateOfVaccination: Date;
  midwifeId: string; // Reference to User (Midwife)
  bhwId: string; // Reference to User (BHW)
}
