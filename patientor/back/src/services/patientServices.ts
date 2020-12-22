import patientsData from '../data/patients.json'
import {Patient, NewPatient, PublicPatient, Entry} from '../types'

const patients: Array<Patient> = patientsData as Patient[];

const getPatients = (): PublicPatient[] => {
  return patients;
};

const getPatientByID = (id: string): Patient | undefined => {

  let patient = patients.find((p) => p.id === id);

  if (!patient?.entries)
    patient = {
      ...patient,
      entries: [],
    } as Patient;

  return patient
}

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    ...patient,
    entries: [] as Entry[]
  }
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
  getPatientByID
};