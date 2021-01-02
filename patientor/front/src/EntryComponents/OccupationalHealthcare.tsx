import React from "react"
import { Segment, Icon } from "semantic-ui-react"
import { OccupationalHealthcareEntry } from "../types"

import Date from "./Date"
import Description from "./Description"
import Diagnoses from "./Diagnoses"


interface OcupationalHealthcareProps {
    entry : OccupationalHealthcareEntry
}


const OcupationalHealthcare: React.FC<OcupationalHealthcareProps> = ({entry}) => {

return (
    <div>
        <Segment>
            <Date date={entry.date}/>
            <span>
                <Icon name="stethoscope" size="large"/>
            </span>
            <span>
                <strong>{entry.employerName}</strong>
            </span>
            <Description description={entry.description}/>
            <Diagnoses entry={entry}/>
            {entry.sickLeave ? <p> <strong>Sick leave from:</strong> {entry.sickLeave?.startDate} <strong>to:</strong> {entry.sickLeave?.endDate}</p> : null }           
        </Segment>
    </div>

)

}


export default OcupationalHealthcare