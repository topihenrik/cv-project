import React from "react";
import "./style.css";

function Experience(props) {
    const {idKey, experienceDatas, setExperienceDatas, handleExperienceDeletion} = props;

    function handleChange(e) {
        const value = e.target.value;
        setExperienceDatas({
            datas: {
                ...experienceDatas.datas,
                [idKey]: {
                    ...experienceDatas.datas[idKey],
                    [e.target.name]: value,
                },
            },
        });
    }

    return(
        <section className="informationBox">
            
            <input 
                className="inputStyle1" 
                placeholder="Company name"
                type="text"
                name="companyName"
                value={experienceDatas.datas[idKey].companyName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Position"
                type="text"
                name="position"
                value={experienceDatas.datas[idKey].position}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={experienceDatas.datas[idKey].city}
                onChange={handleChange}/>
            <div className="fromtoBox">
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={experienceDatas.datas[idKey].from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={experienceDatas.datas[idKey].to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={experienceDatas.datas[idKey].additionalInfo}
                onChange={handleChange}/>
            {<button className="editorButton" value={experienceDatas.datas[idKey].id} onClick={handleExperienceDeletion}>Remove</button>}
        </section>
    );
}

export default Experience;