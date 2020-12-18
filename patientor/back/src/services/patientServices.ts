import patientsData from '../data/patients.json'
import {Patient, NewPatient} from '../types'

const patients: Array<Patient> = patientsData;

const getPatients = () => {
  return patients;
};

const addPatient = (patient: NewPatient)  :Patient => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    ...patient
  }
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient
};