import React from "react";
import "./style.css";


function ExperienceResult(props) {
    const {experienceInfo} = props;
    return(
        <>
            <div className="experienceBox2">
                <div className="experienceBox2Time">
                    <p>{(experienceInfo.from===""?"From":experienceInfo.from) + " - " + (experienceInfo.to===""?"To":experienceInfo.to)}</p>
                </div>
                <div>
                    <p>{experienceInfo.position===""?"Position":experienceInfo.position}</p>
                    <p>{(experienceInfo.companyName===""?"Company name":experienceInfo.companyName) + ", " + (experienceInfo.city===""?"City":experienceInfo.city)}</p>
                    <p>{experienceInfo.additionalInfo===""?"Additional information":experienceInfo.additionalInfo}</p>
                </div>
            </div>
        </>
    );
}


export default ExperienceResult;