import React from "react";
import {Entry, assertNever} from '../types'
import Hospital from '../EntryComponents/Hospital'
import OcupationalHealthcare from '../EntryComponents/OccupationalHealthcare'
import Healtcheck from '../EntryComponents/Healthcheck'



const EntryDetails: React.FC<{entry: Entry}> = ( {entry} ) => {

    switch(entry.type){
        case "Hospital":
            return <Hospital entry={entry}/>
        case "OccupationalHealthcare":
            return <OcupationalHealthcare entry={entry}/>
        case "HealthCheck":
            return <Healtcheck entry={entry}/>
        default:
            return assertNever(entry)

    }

}

export default EntryDetails