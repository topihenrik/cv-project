import React from "react";
import uniqid from "uniqid";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./style.css";

function Editor(props) {
    const {generalInfo, setGeneralInfo, educationInfo, setEducationInfo, educationDatas, setEducationDatas, experienceInfo, setExperienceInfo} = props;


    function AddEducationSection(e) {
        setEducationInfo({
            data: {
                schoolName: "",
                city: "",
                degree: "",
                subject: "",
                from: "",
                to: "",
                additionalInfo: "",
                id: uniqid(),
                id2: uniqid(),
              },
        })
        setEducationDatas({
            datas: {
                ...educationDatas.datas,
                [educationInfo.id]: educationInfo,
            }
        })
    }


    return(
        <div className="editorBox">
            <General 
                generalInfo={generalInfo} 
                setGeneralInfo={setGeneralInfo}/>
            <ul className="editorUl">
                {Object.keys(educationDatas.datas).map((data) => {
                    console.log(JSON.stringify(educationDatas.datas[data]));
                    console.log(JSON.stringify(educationDatas));
                    return(
                        <section key={educationDatas.datas[data].id2} className="informationBox">
                            <Education 
                                educationInfo={educationDatas.datas[data]} 
                                setEducationInfo={setEducationInfo}
                                educationDatas={educationDatas}
                                setEducationDatas={setEducationDatas}/>
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