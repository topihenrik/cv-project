import React from "react";
import uniqid from "uniqid";
import "./style.css";



function Experience(props) {
    const {experienceInfo, setExperienceInfo} = props;

    function handleChange(e) {
        const value = e.target.value;
        setExperienceInfo({
            datas: [
                ...experienceInfo.datas,
            ],
            data: {
                ...experienceInfo.data,
                [e.target.name]: value,
            }
        })
    }



    function addData() {
        setExperienceInfo({
            datas: [
                ...experienceInfo.datas,
                experienceInfo.data,
            ],
            data: {
                ...experienceInfo.data,
                id: uniqid(),
            }
        })
    }

    return(
        <section className="informationBox">
            <h3 className="informationTitle">Experience</h3>
            <input 
                className="inputStyle1" 
                placeholder="Company name"
                type="text"
                name="companyName"
                value={experienceInfo.data.companyName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Position"
                type="text"
                name="position"
                value={experienceInfo.data.position}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={experienceInfo.data.city}
                onChange={handleChange}/>
            <div>
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={experienceInfo.data.from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={experienceInfo.data.to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={experienceInfo.data.additionalInfo}
                onChange={handleChange}/>
            <button onClick={addData}>Add</button>
        </section>
    );

}

export default Experience;