import React from "react";


interface exerciseType {
    exerciseCount:number
}
interface TotalProps {
    courseParts: exerciseType[]
}


const Total: React.FC <TotalProps> = ({courseParts}) => {

  return (
    <div>
      <p>
        <strong>Number of exercises: </strong>{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};


export default Total;



