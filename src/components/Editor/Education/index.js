import React from "react";
import "./style.css";

function Education(props) {
    const {idKey, educationDatas, setEducationDatas, handleEducationDeletion} = props;
    console.log(idKey);
    function handleChange(e) {
        const value = e.target.value;
        setEducationDatas({
            datas: {
                ...educationDatas.datas,
                [idKey]: {
                    ...educationDatas.datas[idKey],
                    [e.target.name]: value,
                },
            },
        });
    }

    return(
        <>
            <input 
                className="inputStyle1" 
                placeholder="School name"
                type="text"
                name="schoolName"
                value={educationDatas.datas[idKey].schoolName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={educationDatas.datas[idKey].city}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Degree"
                type="text"
                name="degree"
                value={educationDatas.datas[idKey].degree}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Subject"
                type="text"
                name="subject"
                value={educationDatas.datas[idKey].subject}
                onChange={handleChange}/>
            <div className="fromtoBox">
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={educationDatas.datas[idKey].from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={educationDatas.datas[idKey].to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={educationDatas.datas[idKey].additionalInfo}
                onChange={handleChange}></textarea>
            <button className="editorButton" value={educationDatas.datas[idKey].id} onClick={handleEducationDeletion}>Remove</button> {/* Deletion */}
        </>
    );
}

export default Education;