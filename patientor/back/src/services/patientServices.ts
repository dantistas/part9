import patientsData from '../data/patients'
import {Patient, NewPatient, PublicPatient, Entry} from '../types'

const patients: Array<Patient> = patientsData

const getPatients = (): PublicPatient[] => {
  return patients;
};

const getPatientByID = (id: string): Patient | undefined => {

  let patient = patients.find((p) => p.id === id);
  console.log("pacientas: ",patient)

  if (patient && !patient?.entries)
    patient = {
      ...patient,
      entries: [],
    }

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