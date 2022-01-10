import React, { useState } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Editor from "./components/Editor"
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
    address: "",
    additionalInfo: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    datas: [],
    data: {
      schoolName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      additionalInfo: "",
      id: uniqid(),
    },
  });

  const [experienceInfo, setExperienceInfo] = useState({
    datas: [],
    data: {
      companyName: "",
      position: "",
      city: "",
      from: "",
      to: "",
      additionalInfo: "",
      id: uniqid(),
    },
  });


  return(
    <>
      <Header/>
      <div className="main">
        <Editor 
          generalInfo={generalInfo} 
          setGeneralInfo={setGeneralInfo} 
          educationInfo={educationInfo} 
          setEducationInfo={setEducationInfo}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}/>
        <Result 
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
