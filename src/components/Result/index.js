import React from "react";
import BlankAvatar from "./blank-avatar.png";
import EducationResult from "./EducationResult";
import ExperienceResult from "./ExperienceResult";
import "./style.css";

function Result(props) {
    const {generalInfo, educationInfo, experienceInfo} = props;
    return(
        <div className="resultBox">
            <div className="info10">
                <h1>{(generalInfo.firstName===""?"FirstName":generalInfo.firstName) + " " + (generalInfo.lastName===""?"LastName":generalInfo.lastName)}</h1>
                <h2>{generalInfo.title===""?"Title":generalInfo.title}</h2>
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
                        {Object.keys(educationInfo.datas).map((data) => {
                            return(
                            <section key={educationInfo.datas[data].id} className="infoSection">
                                <EducationResult educationInfo={educationInfo.datas[data]}/>
                            </section>)
                        })}
                    </ul>
                    <div className="experienceBox1">
                        <h3>Experience</h3>
                    </div>
                    <ul className="infoUl">
                        {Object.keys(experienceInfo.datas).map((data) => {
                            return(
                            <section key={experienceInfo.datas[data].id} className="infoSection">
                                <ExperienceResult experienceInfo={experienceInfo.datas[data]}/>
                            </section>)
                        })}
                    </ul>

                    {/* <ul className="infoUl">
                        {experienceInfo.datas.map((data) => {
                            return(
                            <section key={data.id} className="infoSection">
                                <ExperienceResult experienceInfo={data}/>
                            </section>)
                        })}
                    </ul> */}
                </div>
            </div>
            
        </div>
    );

}

export default Result;
