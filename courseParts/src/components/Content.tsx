import React from "react";
import Part from "../components/Part"
import CoursePart from '../type'


/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};




interface ContentProps {
    courseParts: CoursePart[]
}

const Content: React.FC <ContentProps> = ({courseParts}) => {

  const parts = courseParts.map((part) => {
    switch (part.name) {
      case "Fundamentals":
        return <Part key={part.name} part={part} />;
      case "Using props to pass data":
        return <Part key={part.name} part={part} />;
      case "Deeper type usage":
        return <Part key={part.name} part={part} />;
      case "New course":
        return <Part key={part.name} part={part} />;
      default:
        return assertNever(part);
    }
  });

  return <React.Fragment>{parts}</React.Fragment>;
};


export default Content;



