import patientsData from '../data/patients'
import {Patient, NewPatient, PublicPatient, Entry, NewEntry} from '../types'

const patients: Array<Patient> = patientsData

const getPatients = (): PublicPatient[] => {
  return patients;
};

const getPatientByID = (id: string): Patient | undefined => {

  let patient = patients.find((p) => p.id === id);

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


const addEntry = (patient: Patient, entry: NewEntry): Patient => {
  
  const entryToAdd = {
    id: (patient.entries.length + Math.random().toString(36).substr(2, 9)).toString(),
    ...entry  
  }
  patient.entries.push(entryToAdd)
  return patient

}

export default {
  getPatients,
  addPatient,
  getPatientByID,
  addEntry
};