export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
  }

export interface Patient {
    id: String,
    name: String,
    dateOfBirth: String,
    gender: String,
    occupation: String,
    ssn: String

}

export enum Gender {
  male = "male",
  female = "female",
  other = "other"
}