import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";



interface courseType {
    name:String,
    exerciseCount: number
}

interface ContentProps {
    courseParts: courseType[]
}

const Content: React.FC <ContentProps> = ({courseParts}) => {

  return (
    <div>
            <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
    </div>
  );
};


export default Content;



