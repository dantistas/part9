import React from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import {useParams} from 'react-router-dom';
import { useStateValue, setPatientData } from "../state";
import { Icon } from "semantic-ui-react";
import { Patient, Entry } from "../types";
import EntryDetails from './EntryDetails'





const PatientPage: React.FC = () => {
    const [{patient}, dispatch] = useStateValue()

    const { id } = useParams<{ id: string }>();

    React.useEffect(()=>{
        const getPatient = async () => {
            try{
                const {data: patientData} = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`)
                dispatch(setPatientData(patientData))
            }catch (e){
                console.log(e)
            }
        }
        if (!patient || patient.id !== id) {
            getPatient();
          }
    }, [patient, id, dispatch])


    const genderIcon = () => {
       switch(patient?.gender){
            case "male":
                return <Icon name="mars" />
            case "female":
                return <Icon name="venus" />
            default:
                return <Icon name="genderless"/>
       }
    }

    if(!patient){
        return (
            null
        )
    }else{
        return (
            <div>
                <h1>{patient.name} {genderIcon()}</h1>
                <p>ssn: {patient.ssn}</p>
                <p>occupation: {patient.occupation}</p>
                {patient.entries.length > 0 ? <h2>Entries: </h2> : null }
                {patient.entries.map((entry: Entry)=>(<EntryDetails key={entry.id} entry={entry}/>))}
            </div>
        )
    }

}

export default PatientPage