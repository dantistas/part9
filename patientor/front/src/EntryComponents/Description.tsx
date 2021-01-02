import React from "react";


interface DescriptionProps {
  description: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {

    const style = {
        "fontStyle": "italic",
        "color": "silver",
        "paddingTop": "5px"
    }

    return (
        <div>
            <p style={style}>{description}</p>
        </div>
    )
}

export default Description;