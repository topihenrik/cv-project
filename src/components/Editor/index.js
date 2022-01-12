import React from "react";
import uniqid from "uniqid";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./style.css";
import { useEffect } from "react/cjs/react.development";

function Editor(props) {
    const {generalInfo, setGeneralInfo, educationInfo, setEducationInfo, educationDatas, setEducationDatas, experienceInfo, setExperienceInfo, experienceDatas, setExperienceDatas, handlePrint} = props;


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


    function AddExperienceSection(e) {
        setExperienceInfo({
            companyName: "",
            position: "",
            city: "",
            from: "",
            to: "",
            additionalInfo: "",
            id: uniqid(),
            id2: uniqid(),
        })
    }

    useEffect(() => {
        setExperienceDatas({
            datas: {
                ...experienceDatas.datas,
                [experienceInfo.id]: experienceInfo,
            }
        })
    }, [experienceInfo])




    function handleEducationDeletion(e) /* Deletion */ {
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

    function handleExperienceDeletion(e) /* Deletion */ {
        const value = e.target.value;

        console.log("Before filter:");
        console.log(experienceDatas.datas);

        const filteredDatas = Object.keys(experienceDatas.datas)
        .filter(key => ![value].includes(key))
        .reduce((obj, key) => {
          obj[key] = experienceDatas.datas[key];
          return obj;
        }, {});


        console.log("[educationDatas.datas] After filter:");
        console.log(experienceDatas.datas);
        console.log("[filteredDatas] After filter:");
        console.log(filteredDatas);

        setExperienceDatas({
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
                                handleEducationDeletion={handleEducationDeletion}/>
                        </section>
                    )
                })}
            </ul>

            {/* <Education 
                educationInfo={educationInfo} 
                setEducationInfo={setEducationInfo}
                setEducationDatas={setEducationDatas}/> */}

            <button className="editorButton" onClick={AddEducationSection}>Add</button>
            
            <h3 className="informationTitle">Experience</h3>
            <ul className="editorUl">
                {Object.keys(experienceDatas.datas).map((data) => {
                    return(
                        <section key={experienceDatas.datas[data].id2} className="informationBox">
                            <Experience 
                                experienceInfo={experienceDatas.datas[data]} 
                                setExperienceInfo={setExperienceInfo}
                                experienceDatas={experienceDatas}
                                setExperienceDatas={setExperienceDatas}
                                handleExperienceDeletion={handleExperienceDeletion}/>
                        </section>
                    )
                })}
            </ul>



            {/* <Experience 
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}/> */}

        <button className="editorButton" onClick={AddExperienceSection}>Add</button>
        <button className="editorButton" onClick={handlePrint}>Download PDF</button>
        </div>
    );

}

export default Editor;