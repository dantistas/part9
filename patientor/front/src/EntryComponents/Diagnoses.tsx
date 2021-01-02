import React from "react";
import {Entry} from '../types'
import {useStateValue} from '../state/state'


interface DiagnosesProps {
  entry: Entry;
}

const Diagnoses: React.FC<DiagnosesProps> = ({ entry }) => {
    const [{ diagnosesList }] = useStateValue();

    return (
        <div>
            {entry.diagnosisCodes?.map((code) => {
                const diagnose =  diagnosesList.find(diagnose => diagnose.code === code)
                return (
                    <li key={code}>{code} {diagnose?.name}</li>
                )
            })}
        </div>
    )
}

export default Diagnoses;