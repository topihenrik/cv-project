import React from "react";
import uniqid from "uniqid";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./style.css";
import { useEffect } from "react/cjs/react.development";

function Editor(props) {
    const {generalInfo, setGeneralInfo, educationInfo, setEducationInfo, educationDatas, setEducationDatas, experienceInfo, setExperienceInfo} = props;


    function AddEducationSection(e) {
        setEducationInfo({
            schoolName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
            additionalInfo: "",
            id: uniqid(),
            id2: uniqid(),
        })
        
    }

    useEffect(() => {
        setEducationDatas({
            datas: {
                ...educationDatas.datas,
                [educationInfo.id]: educationInfo,
            }
        })
    }, [educationInfo])




    function handleDeletion(e) /* Deletion */ {
        const value = e.target.value;

        console.log("Before filter:");
        console.log(educationDatas.datas);

        const filteredDatas = Object.keys(educationDatas.datas)
        .filter(key => ![value].includes(key))
        .reduce((obj, key) => {
          obj[key] = educationDatas.datas[key];
          return obj;
        }, {});


        console.log("[educationDatas.datas] After filter:");
        console.log(educationDatas.datas);
        console.log("[filteredDatas] After filter:");
        console.log(filteredDatas);

        setEducationDatas({
            datas: {
                ...filteredDatas,
            }
        })
    }


    return(
        <div className="editorBox">
            <General 
                generalInfo={generalInfo} 
                setGeneralInfo={setGeneralInfo}/>
            <h3 className="informationTitle">Education</h3>
            <ul className="editorUl">
                {Object.keys(educationDatas.datas).map((data) => {
                    return(
                        <section key={educationDatas.datas[data].id2} className="informationBox">
                            <Education 
                                educationInfo={educationDatas.datas[data]} 
                                setEducationInfo={setEducationInfo}
                                educationDatas={educationDatas}
                                setEducationDatas={setEducationDatas}
                                handleDeletion={handleDeletion}/>
                        </section>
                    )
                })}
            </ul>

            {/* <Education 
                educationInfo={educationInfo} 
                setEducationInfo={setEducationInfo}
                setEducationDatas={setEducationDatas}/> */}

            <button className="editorButton" onClick={AddEducationSection}>Add</button>
            





            <Experience 
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}/>
        </div>
    );

}

export default Editor;