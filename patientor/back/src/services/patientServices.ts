import patientsData from '../data/patients.json'
import {Patient} from '../types'

const patients: Array<Patient> = patientsData;

const getPatients = () => {
  return patients;
};

const addPatient = (name: string, dateOfBirth: string, ssn: string, gender:string, occupation:String)  :Patient => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  }
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient
};