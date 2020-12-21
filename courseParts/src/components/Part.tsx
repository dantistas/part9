import React from "react";
import CoursePart from '../type'


interface partProps {
    part: CoursePart
}

const Part: React.FC <partProps> = ({part}) => {

if(part.name === "Fundamentals"){
    return (
        <div>
            <h4>Course name: {part.name}</h4>
            <p>Exercise Count: {part.exerciseCount}</p>
            <p>Description: {part.description}</p>
        </div>
    )
} else if(part.name === "Using props to pass data"){
    return (
        <div>
            <h4>Course name: {part.name}</h4>
            <p>Exercise Count: {part.exerciseCount}</p>
            <p>Group Project Count: {part.groupProjectCount}</p>  
        </div>
    )
} else if (part.name === "Deeper type usage"){
    return (
        <div>
            <h4>Course name: {part.name}</h4>
            <p>Exercise Count: {part.exerciseCount}</p>
            <p>Description: {part.description}</p>
            <p>Exercise submision link: <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a></p>
        </div>
    )
} else if (part.name === "New course"){
    return (
        <div>
            <h4>Course name: {part.name}</h4>
            <p>Exercise Count: {part.exerciseCount}</p>
            <p>Description: {part.description}</p>
        </div>
    )
}
return null

}



export default Part