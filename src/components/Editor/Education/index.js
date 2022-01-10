import React from "react";
import uniqid from "uniqid";
import "./style.css";



function Education(props) {
    const {educationInfo, setEducationInfo} = props;
    
    
    function handleChange(e) {
        const value = e.target.value;
        setEducationInfo({
            datas: [
                ...educationInfo.datas,
            ],
            data: {
                ...educationInfo.data,
                [e.target.name]: value,
            }
            });
    }
    
    
    function addData() {
        setEducationInfo({
            datas: [
                ...educationInfo.datas,
                educationInfo.data,
            ],
            data: {
                ...educationInfo.data,
                id: uniqid(),
            }
        })
    }




    return(
        <section className="informationBox">
            <h3 className="informationTitle">Education</h3>
            <input 
                className="inputStyle1" 
                placeholder="School name"
                type="text"
                name="schoolName"
                value={educationInfo.data.schoolName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={educationInfo.data.city}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Degree"
                type="text"
                name="degree"
                value={educationInfo.data.degree}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Subject"
                type="text"
                name="subject"
                value={educationInfo.data.subject}
                onChange={handleChange}/>
            <div>
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={educationInfo.data.from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={educationInfo.data.to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={educationInfo.data.additionalInfo}
                onChange={handleChange}></textarea>
            <button onClick={addData}>Add</button>
        </section>
    );

}


export default Education;