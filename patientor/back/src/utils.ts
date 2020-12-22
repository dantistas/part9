/* eslint-disable @typescript-eslint/no-explicit-any */

import {NewPatient, Gender} from './types'

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (text: any): boolean => {
    return Boolean(Date.parse(text));
};

const isGender = (gender: any): gender is Gender => {
    return Object.values(Gender).includes(gender);
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


const toNewPatient = (object: any): NewPatient => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDOB(object.dateOfBirth),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        ssn: parseSSN(object.ssn),
        entries:[]
    }
    
}


export default toNewPatient