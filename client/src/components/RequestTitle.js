import React from "react";
import '../App.css';

function RequestTitle(props) {
    const { requestest } = props;
    return (
        
            <p>{requestest.title}</p>
      
    );
}
export default RequestTitle;