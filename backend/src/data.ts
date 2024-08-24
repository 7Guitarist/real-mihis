export const child: any[] = [
  {
    id: "child1",
    motherId: "mother1",
    firstName: "Katleen",
    lastName: "Dela Cruz",
    purok: "2",
    gender: "Female",
    weight: 17,
    height: 98,
    barangay: "Bangad",
    dateOfBirth: "2020-11-26",
    photoPath: "assets/img/child-1.jpg",
    vaccinations: [
      {
        vaccineType: "BCG",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2020-12-02",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Hepatitis B Vaccine",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2020-12-09",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pentavalent Vaccine",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-02-03",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Oral Polio Vaccine (OPV)",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-02-03",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pentavalent Vaccine",
        doseNumber: "2nd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-03-10",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Oral Polio Vaccine (OPV)",
        doseNumber: "2nd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-03-10",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pentavalent Vaccine",
        doseNumber: "3rd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-04-14",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Oral Polio Vaccine (OPV)",
        doseNumber: "3rd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-04-14",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Inactivated Polio Vaccine (IPV)",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-04-14",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Inactivated Polio Vaccine (IPV)",
        doseNumber: "2nd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-07-28",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pneumococcal Conjugate Vaccine (PCV)",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-02-03",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pneumococcal Conjugate Vaccine (PCV)",
        doseNumber: "2nd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-03-10",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Pneumococcal Conjugate Vaccine (PCV)",
        doseNumber: "3rd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-04-14",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Measles, Mumps, Rubella Vaccine (MMR)",
        doseNumber: "1st Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-09-01",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
      {
        vaccineType: "Measles, Mumps, Rubella Vaccine (MMR)",
        doseNumber: "2nd Dose",
        placeOfVaccination: "Barangay Health Center",
        dateOfVaccination: "2021-11-24",
        midwifeId: "midwife1",
        bhwId: "bhw1",
      },
    ],
    isFullyVaccinated: true,
    dateFullyVaccinated: "2021-11-24",
    weighingHistory: [
      {
        date: "2024-01-25",
        weight: 17,
        height: 98,
        weightForAgeStatus: "Normal",
        heightForAgeStatus: "Normal",
        weightForLengthHeightStatus: "Normal",
        notes: "Annual check-up",
      },
    ],
  },
];
export const mother: any[] = [
  {
    id: "mother1",
    firstName: "Evangeline",
    lastName: "Dela Cruz",
    barangay: "Bangad",
    isTransient: false,
    gmail: "evangeline.cruz@gmail.com",
    phone: "+639587485326",
    purok: "2",
    children: child.filter((child) => child.motherId === "mother1"),
  },
];
