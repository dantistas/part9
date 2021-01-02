import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import {HospitalEntry} from '../types'
import Date from './Date'
import Description from './Description'
import Diagnoses from './Diagnoses'


interface HospitalProps {
  entry: HospitalEntry;
}

const Hospital: React.FC<HospitalProps> = ({ entry }) => {

    return (
        <div>
            <Segment>
                <div>   
                    <Date date={entry.date}/>
                    <Icon name="hospital" size="large"/>
                    <Description description={entry.description}/>
                    <Diagnoses entry={entry}/>
                    <div>
                       <p><strong>Discharge: </strong> {entry.discharge?.criteria} {entry.discharge?.date} </p>
                    </div>
                </div>    
            </Segment>
        </div>
    )
}

export default Hospital;