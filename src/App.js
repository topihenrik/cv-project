import React, { useEffect, useState } from "react";
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
    schoolName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
    additionalInfo: "",
    id: uniqid(),
    id2: uniqid(),
});


  const [educationDatas, setEducationDatas] = useState({
    datas: {},
  })


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



useEffect(() => {
  console.log("Init render");
  setEducationInfo({
    ...educationInfo,
  })

  setEducationDatas({
    datas: {
      ...educationDatas.datas,
      [educationInfo.id]: educationInfo,
    },
  })

  setExperienceInfo({
    datas: [
      ...experienceInfo.datas,
      experienceInfo.data,
    ],
    data: {
      ...experienceInfo.data,
    }
  })
},[]);




  return(
    <>
      <Header/>
      <div className="main">
        <Editor 
          generalInfo={generalInfo} 
          setGeneralInfo={setGeneralInfo} 
          educationInfo={educationInfo} 
          setEducationInfo={setEducationInfo}
          educationDatas={educationDatas}
          setEducationDatas={setEducationDatas}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}/>
        <Result 
          generalInfo={generalInfo}
          educationInfo={educationDatas}
          experienceInfo={experienceInfo}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
