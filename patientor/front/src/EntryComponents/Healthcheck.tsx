import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import {HealthCheckEntry, HealthCheckRating} from '../types'
import Date from './Date'
import Description from './Description'
import Diagnoses from './Diagnoses'


interface HealthcheckProps {
    entry: HealthCheckEntry
}


const Healthcheck: React.FC<HealthcheckProps>  = ({entry}) => {
    
    const getHealthRatingIcon = () => {
        switch(entry.healthCheckRating){
            case HealthCheckRating.Healthy:
                return <Icon name="heart" size="small" color="green"/>
            case HealthCheckRating.LowRisk:
                return <Icon name="heart" size="small" color="yellow"/>
            case HealthCheckRating.HighRisk:
                return <Icon name="heart" size="small" color="orange"/>
            case HealthCheckRating.CriticalRisk:
                return <Icon name="heart" size="small" color="red"/>
            default:
                return null
        }
    }

    return(
        <div>
            <Segment>
                <Date date={entry.date}/>
                <span>
                    <Icon name="user md" size="large" />
                </span>
                <Description description={entry.description}/>
                <Diagnoses entry={entry}/>
                {getHealthRatingIcon()}
            </Segment>
        </div>

    )
}


export default Healthcheck