import React from "react";
import ReactDOM from "react-dom";


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
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};


export default Total;



