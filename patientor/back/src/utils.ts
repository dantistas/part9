/* eslint-disable @typescript-eslint/no-explicit-any */

import {NewPatient, Gender, Entry, NewEntry, Diagnose, SickLeave, Discharge, BaseEntry, HealthCheckRating, assertNever} from './types'


const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (text: any): boolean => {
    return Boolean(Date.parse(text));
};

const isGender = (gender: any): gender is Gender => {
    return Object.values(Gender).includes(gender);
};

const isEntryType = (entry: any): entry is Entry => {
    const healthCheck: boolean = entry === "HealthCheck";
    const occupationalHealthcare: boolean = entry === "OccupationalHealthcare";
    const hospital: boolean = entry === "Hospital";
  
    return healthCheck || occupationalHealthcare || hospital;
  };


const parseName = (name: any): string => {
    if(!name || !isString(name)){
        throw new Error('Incorrect or mssing name' + name);
    }
    return name;
}; 

const parseDOB = (dateOfBirth: any): string => {
    if(!dateOfBirth || !isDate(dateOfBirth) || !isString(dateOfBirth)){
        throw new Error('Incorrect or missing date of birth: ' + dateOfBirth);
    }
    return dateOfBirth;
};

const parseGender = (gender: any ): Gender => {
    if(!gender || !isString(gender) ||!isGender(gender)){
        throw new Error('incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseOccupation = (occupation: any ): string => {
    if(!occupation || !isString(occupation)){
        throw new Error('incorect or missing occupation: ' + occupation);
    }
    return occupation;
};

const parseSSN = (ssn:any): string => {
    if(!ssn || !isString(ssn)){
        throw new Error('Incorrect or wrong ssn: '+ ssn);
    }
    return ssn;
};

const parseEntries = (entries: any): Entry[] => {
    if (!entries || entries.map((entry: any) => !isEntryType(entry.type))) {
      throw new Error("Incorrect or missing entries: " + entries);
    }
    return entries;
  };


const toNewPatient = (object: any): NewPatient => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDOB(object.dateOfBirth),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        ssn: parseSSN(object.ssn),
        entries: parseEntries(object.entries) || []
    }
    
}

const parseDescription = (description: any) : string => {
    if(!description || !isString(description)){
        throw new Error("Incorect or missing description: "+ description)
    }
    return description
}

const parseSpecialist = (specialist: any): string => {
    if(!specialist || !isString(specialist)){
        throw new Error("Incorrect of missing specialist: " + specialist)
    }
    return specialist
}

const parseDiagnosisCodes = (diagnosisCodes: any): Array<Diagnose["code"]> => {

    if (!Array.isArray(diagnosisCodes) || !diagnosisCodes || !diagnosisCodes.every((code: any) =>isString(code)) ) {
        throw new Error("Incorrect or missing diagnosis codes: " + diagnosisCodes);
      }
      return diagnosisCodes
  }

const parseDate = (date: any): string => {
    if(!date || !isString(date) || !isDate(date)){
        throw new Error("Incorrect or missing date: "+ date)
    }
    return date
}

const parseEmployerName = (employerName: any): string => {
    if(!employerName || !isString(employerName)){
        throw new Error("Incorrect or missing employer name: " + employerName)
    }
    return employerName
}

const parseDischarge = (discharge: any ): Discharge => {
    if(!discharge.date || !discharge.criteria || !isString(discharge.criteria) || !isString(discharge.date) || !isDate(discharge.date)){
        throw new Error("Incorrect of missing discharge details: " + discharge.date + " " + discharge.criteria)
    }
    return discharge
}

const parseSickLeave = (sickLeave: any): SickLeave => {
    if(!sickLeave.startDate || !sickLeave.endDate || !isString(sickLeave.startDate) || !isString(sickLeave.endDate) || !isDate(sickLeave.startDate) || !isDate(sickLeave.endDate)){
        throw new Error("Incorrect or missing sick leabve details: " + sickLeave.startDate + " " + sickLeave.endDate)
    }
    return sickLeave
}

const parseHealthcheckRating = (rating: any ): HealthCheckRating=> {
    if(rating === undefined || !Object.values(HealthCheckRating).includes(rating) ){
        throw new Error("Incorect or missing healthcheck rating: " + rating)
    }
    return rating
     
}

const parseEntry = (entry: any): NewEntry => {
    if(!entry || !isEntryType(entry.type)){
        throw new Error ("Incorrect or missign entry: "+ entry)
    }
    return entry

}


export const toNewEntry = (object: any ):  NewEntry => {

    const entryType = parseEntry(object)
    if(!entryType){
        throw new Error("Incorrect entry")
    }

    const entry: Omit<BaseEntry, "id"> = {
        description: parseDescription(entryType.description),
        date: parseDate(entryType.date),
        specialist: parseSpecialist(entryType.specialist),
        diagnosisCodes: parseDiagnosisCodes(entryType.diagnosisCodes)
    }

    switch(entryType.type){
        case "Hospital":
            return {
                ...entry,
                type: entryType.type,
                discharge: parseDischarge(entryType.discharge)
            }
        case "OccupationalHealthcare":
            return {
                ...entry,
                type: entryType.type,
                employerName: parseEmployerName(entryType.employerName),
                sickLeave: parseSickLeave(entryType.sickLeave)
            }
        case "HealthCheck": 
            return {
                ...entry,
                type: entryType.type,
                healthCheckRating: parseHealthcheckRating(entryType.healthCheckRating)
            }
        default:
            return assertNever(entryType)
    }

}


export default toNewPatient