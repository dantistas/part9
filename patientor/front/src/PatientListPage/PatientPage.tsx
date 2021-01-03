import React from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import {useParams} from 'react-router-dom';
import { useStateValue, setPatientData, addEntry } from "../state";
import { Icon, Button } from "semantic-ui-react";
import { Patient, Entry } from "../types";
import EntryDetails from './EntryDetails'
import AddEntryModal from '../AddEntryModal'
import {EntryFormValues} from '../AddEntryModal/AddEntryForm'





const PatientPage: React.FC = () => {
    const [{patient}, dispatch] = useStateValue()
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | undefined>();
  
    const openModal = (): void => setModalOpen(true);
  
    const closeModal = (): void => {
      setModalOpen(false);
      setError(undefined);
    };

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

  
    const submitNewEntry = async (values: EntryFormValues) => {
        try{
            const {data: entry} = await axios.post<Patient>(`${apiBaseUrl}/patients/${id}/entries`, values)
            dispatch(addEntry(entry))
            closeModal()
        }catch (e){
            console.log(e.response)
            setError(e.response.data)
        }
      };

    if(!patient){
        return (
            null
        )
    }else{
        return (
            <div>
                <AddEntryModal modalOpen={modalOpen} onSubmit={submitNewEntry} onClose={closeModal} error={error}/>
                <h1>{patient.name} {genderIcon()}</h1>
                <p>ssn: {patient.ssn}</p>
                <p>occupation: {patient.occupation}</p>
                {patient.entries.length > 0 ? <h2>Entries: </h2> : <h3>No entries</h3> }
                <Button color="green" onClick={() => openModal()}>Add New Entry</Button>
                {patient.entries.map((entry: Entry)=>(<EntryDetails key={entry.id} entry={entry}/>))}
            </div>
        )
    }

}

export default PatientPage