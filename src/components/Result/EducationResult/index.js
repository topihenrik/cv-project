import React from "react";
import "./style.css";

function EducationResult(props) {
    const {educationInfo} = props;
    return(
        <>
            <div className="educationBox2">
                <div className="educationBox2Time">
                    <p>{(educationInfo.from===""?"From":educationInfo.from) + " - " + (educationInfo.to===""?"To":educationInfo.to)}</p>
                </div>
                <div>
                    <p>{(educationInfo.schoolName===""?"School name":educationInfo.schoolName) + ", " + (educationInfo.city===""?"City":educationInfo.city)}</p>
                    <p>{educationInfo.degree===""?"Degree":educationInfo.degree}</p>
                    <p>{educationInfo.subject===""?"Subject":educationInfo.subject}</p>
                    <p>{educationInfo.additionalInfo===""?"Additional information":educationInfo.additionalInfo}</p>
                </div>
            </div>
        </>
    );
}

export default EducationResult;