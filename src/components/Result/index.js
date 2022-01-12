import React from "react";
import BlankAvatar from "./blank-avatar.png";
import EducationResult from "./EducationResult";
import ExperienceResult from "./ExperienceResult";
import "./style.css";

const Result = React.forwardRef((props, ref) => {
    const {generalInfo, educationDatas, experienceDatas} = props;
    return(
        <div className="resultBox">
            <div ref={ref} className="pdfBox">
                <div className="info10" style={{ backgroundColor: generalInfo.headerColor }}>
                    <h1 className="h1Name">{(generalInfo.firstName===""?"John":generalInfo.firstName) + " " + (generalInfo.lastName===""?"Doe":generalInfo.lastName)}</h1>
                    <h2 className="h2Title">{generalInfo.title===""?"Title":generalInfo.title}</h2>
                </div>
                <div className="info20">
                    <div className="info21">
                        <section className="personalDetails">
                            <img className="avatar" src={(generalInfo.picture === "")?BlankAvatar:generalInfo.picture} alt="Personal Avatar"/>
                            <h3>Personal Details</h3>
                            <p>{generalInfo.address===""?"Address":generalInfo.address}</p>
                            <p>{generalInfo.phoneNumber===""?"Phone number":generalInfo.phoneNumber}</p>
                            <p>{generalInfo.email===""?"Email":generalInfo.email}</p>
                        </section>
                    </div>
                    <div className="info22">
                        <section className="infoSection">
                            <h3>Information</h3>
                            <p>{generalInfo.additionalInfo===""?"Description":generalInfo.additionalInfo}</p>
                        </section>
                        <div className="educationBox1">
                            <h3>Education</h3>
                        </div>
                        <ul className="infoUl">
                            {Object.keys(educationDatas.datas).map((data) => {
                                return(
                                <section key={educationDatas.datas[data].id} className="infoSection">
                                    <EducationResult educationInfo={educationDatas.datas[data]}/>
                                </section>)
                            })}
                        </ul>
                        <div className="experienceBox1">
                            <h3>Experience</h3>
                        </div>
                        <ul className="infoUl">
                            {Object.keys(experienceDatas.datas).map((data) => {
                                return(
                                <section key={experienceDatas.datas[data].id} className="infoSection">
                                    <ExperienceResult experienceInfo={experienceDatas.datas[data]}/>
                                </section>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

})

export default Result;
