import patientsData from '../data/patients.json'
import {Patient} from '../types'

const patients: Array<Patient> = patientsData;

const getPatients = () => {
  return patients;
};

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  addPatient
};