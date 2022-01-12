import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import uniqid from "uniqid";
import "./style.css";



function Education(props) {
    const {educationInfo, setEducationInfo, educationDatas, setEducationDatas, handleDeletion} = props;

    /* console.log(educationInfo); */

    function handleChange(e) {
        const value = e.target.value;
        setEducationInfo({
            ...educationInfo,
            [e.target.name]: value,
        });


        
    }

    useEffect(() => {
        setEducationDatas({
            datas: {
                ...educationDatas.datas,
                [educationInfo.id]: educationInfo,
            },
        });
    },[educationInfo]);

    
    
    




    return(
        <>
            <input 
                className="inputStyle1" 
                placeholder="School name"
                type="text"
                name="schoolName"
                value={educationInfo.schoolName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={educationInfo.city}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Degree"
                type="text"
                name="degree"
                value={educationInfo.degree}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Subject"
                type="text"
                name="subject"
                value={educationInfo.subject}
                onChange={handleChange}/>
            <div>
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={educationInfo.from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={educationInfo.to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={educationInfo.additionalInfo}
                onChange={handleChange}></textarea>
            <button className="editorButton" value={educationInfo.id} onClick={handleDeletion}>Remove</button> {/* Deletion */}
        </>
    );

}


export default Education;