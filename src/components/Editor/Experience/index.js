import React from "react";
import { useEffect } from "react/cjs/react.development";
import uniqid from "uniqid";
import "./style.css";



function Experience(props) {
    const {experienceInfo, setExperienceInfo, experienceDatas, setExperienceDatas, handleExperienceDeletion} = props;

    function handleChange(e) {
        const value = e.target.value;
        setExperienceInfo({
            ...experienceInfo,
            [e.target.name]: value,
        });
    }


    useEffect(() => {
        setExperienceDatas({
            datas: {
                ...experienceDatas.datas,
                [experienceInfo.id]: experienceInfo,
            },
        });
    }, [experienceInfo])



    /* function addData() {
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
    } */

    return(
        <section className="informationBox">
            
            <input 
                className="inputStyle1" 
                placeholder="Company name"
                type="text"
                name="companyName"
                value={experienceInfo.companyName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Position"
                type="text"
                name="position"
                value={experienceInfo.position}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="City"
                type="text"
                name="city"
                value={experienceInfo.city}
                onChange={handleChange}/>
            <div className="fromtoBox">
                <input 
                    className="inputStyle2" 
                    placeholder="From"
                    type="text"
                    name="from"
                    value={experienceInfo.from}
                    onChange={handleChange}/>
                <input 
                    className="inputStyle2" 
                    placeholder="To"
                    type="text"
                    name="to"
                    value={experienceInfo.to}
                    onChange={handleChange}/>
            </div>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo"
                value={experienceInfo.additionalInfo}
                onChange={handleChange}/>
            {<button className="editorButton" value={experienceInfo.id} onClick={handleExperienceDeletion}>Remove</button>}
        </section>
    );

}

export default Experience;