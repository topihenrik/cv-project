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


    function handleEducationDeletion(e) {
        const value = e.target.value;
        const filteredDatas = Object.keys(educationDatas.datas)
        .filter(key => ![value].includes(key))
        .reduce((obj, key) => {
          obj[key] = educationDatas.datas[key];
          return obj;
        }, {});

        setEducationDatas({
            datas: {
                ...filteredDatas,
            }
        })
    }

    function handleExperienceDeletion(e) {
        const value = e.target.value;
        const filteredDatas = Object.keys(experienceDatas.datas)
        .filter(key => ![value].includes(key))
        .reduce((obj, key) => {
          obj[key] = experienceDatas.datas[key];
          return obj;
        }, {});

        setExperienceDatas({
            datas: {
                ...filteredDatas,
            }
        })
    }


    function handleDatasReset(e) {
        setGeneralInfo({
            firstName: "",
            lastName: "",
            title: "",
            email: "",
            phoneNumber: "",
            address: "",
            additionalInfo: "",
            picture: "",
        })
        setEducationDatas({
            datas: {},
        })
        setExperienceDatas({
            datas: {},
        })
    }


    return(
        <div className="editorBox">
            <General 
                generalInfo={generalInfo} 
                setGeneralInfo={setGeneralInfo}/>


            <div className="divBorder"></div>
            <div className="informationTitleBox">
                <h3 className="informationTitle">Education</h3>
            </div>
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
            <button className="editorButton" onClick={AddEducationSection}>Add</button>

            <div className="divBorder"></div>
            <div className="informationTitleBox">
                <h3 className="informationTitle">Experience</h3>
            </div>
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
            <button className="editorButton" onClick={AddExperienceSection}>Add</button>
            

            <div className="divBorder"></div>
            <div className="actionBox">
                <button className="editorButton" id="downloadBtn" onClick={handlePrint}>Download PDF</button>
                <button className="editorButton" id="resetBtn" onClick={handleDatasReset}>Reset</button>
            </div>
        </div>
    );

}

export default Editor;