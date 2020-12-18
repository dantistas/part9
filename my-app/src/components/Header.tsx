import React from "react";
import ReactDOM from "react-dom";

const Header: React.FC <{ courseName: string }> = ({courseName}) => {

  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};


export default Header;



