import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./style.css";

function Editor(props) {
    const {generalInfo, setGeneralInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo} = props;

    return(
        <div className="editorBox">
            <General 
                generalInfo={generalInfo} 
                setGeneralInfo={setGeneralInfo}/>
            <Education 
                educationInfo={educationInfo} 
                setEducationInfo={setEducationInfo}/>
            <Experience 
                experienceInfo={experienceInfo}
                setExperienceInfo={setExperienceInfo}/>
        </div>
    );

}

export default Editor;