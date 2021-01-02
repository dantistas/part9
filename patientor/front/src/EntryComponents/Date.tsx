import React from "react";


interface DateProps {
  date: React.ReactNode;
}

const Date: React.FC<DateProps> = ({ date }) => {

    return (
        <span>
            <strong>{date}</strong>
        </span>
    )
}

export default Date;