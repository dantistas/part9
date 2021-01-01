import React from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import {useParams} from 'react-router-dom';
import { useStateValue, setPatientData } from "../state";
import { Icon } from "semantic-ui-react";
import { Patient } from "../types";
import { DiagnosisSelection } from "../AddPatientModal/FormField";





const PatientPage: React.FC = () => {
    const [{patient}, dispatch] = useStateValue()
    const [{ diagnosesList }] = useStateValue()

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


    const dateDescriptionAndDiagnosisCodes = () => {
        if(patient?.entries){
            const dateAndDescription = patient.entries.map(e => <p key={e.date}>{e.date}: {e.description}</p>)
            const diagnoseCodes = patient.entries.map(e=> e.diagnosisCodes?.map((code) => {
                const diagnose = diagnosesList.find(diagnose => diagnose.code === code)
                return (<li key={code}>{code} {diagnose?.name}</li>)}))
            if(dateAndDescription.length === 0 || diagnoseCodes.length === 0){
                return (
                    <h3>NO ENTRIES</h3>
                )
            }else{
                return (
                <div>
                    <h3>Entries: </h3>
                    {dateAndDescription}
                    {diagnoseCodes}
                </div>
            )
        }
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
                {dateDescriptionAndDiagnosisCodes()}
            </div>
        )
    }

}

export default PatientPage