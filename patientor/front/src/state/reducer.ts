import { State } from "./state";
import { Diagnosis, Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
   |
   {
     type: "SET_PATIENT_DATA";
     payload: Patient
   }
   |
   {
     type: "SET_DIAGNOSES_LIST";
     payload: Diagnosis[];
   }
   |
   {
     type: "ADD_ENTRY";
     payload: Patient
   } ;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "SET_PATIENT_DATA":
      return {
        ...state,
        patient: action.payload,
        };
    case "SET_DIAGNOSES_LIST":
      return {
        ...state,
        diagnosesList: action.payload,
      };
    case "ADD_ENTRY":
      return {
        ...state,
        patient: action.payload
      }
    default:
      return state;
  }
};

export const addEntry = (patientWithNewEntry: Patient): Action => {
  return{
    type: "ADD_ENTRY",
    payload: patientWithNewEntry
  }
}

export const setPatientList = (patients: Patient[]): Action => {
  return {
    type: "SET_PATIENT_LIST",
    payload: patients
  }
}

export const addPatient = (newPatient: Patient): Action => {
  return {
    type: "ADD_PATIENT",
    payload: newPatient
  }
}

export const setPatientData = (patient : Patient): Action => {
  return {
    type:"SET_PATIENT_DATA",
    payload: patient
  }
} 


export const setDiagnosesList =  (diagnosesList : Diagnosis[]): Action => {
  return {
    type:"SET_DIAGNOSES_LIST",
    payload: diagnosesList,
  }
}