import React, { useEffect, useRef, useState } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Editor from "./components/Editor"
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./style.css";
import { useReactToPrint } from "react-to-print";



function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
    address: "",
    additionalInfo: "",
    picture: "",
  });



  const initEduId = uniqid();
  const initEduId2 = uniqid();
  const [educationInfo, setEducationInfo] = useState({
    schoolName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
    additionalInfo: "",
    id: initEduId,
    id2: initEduId2,
  });

  const [educationDatas, setEducationDatas] = useState({
    datas: {
      [initEduId]: {
        schoolName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        additionalInfo: "",
        id: initEduId,
        id2: initEduId2,
      }
    },
  })


  const initExpId = uniqid();
  const initExpId2 = uniqid();
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    position: "",
    city: "",
    from: "",
    to: "",
    additionalInfo: "",
    id: initExpId,
    id2: initExpId2,
  });

  const [experienceDatas, setExperienceDatas] = useState({
    datas: {
      [initExpId]: {
        companyName: "",
        position: "",
        city: "",
        from: "",
        to: "",
        additionalInfo: "",
        id: initExpId,
        id2: initExpId2,
      }
    },
  })



  /* useEffect(() => {
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
      ...experienceInfo,
    })

    setExperienceDatas({
      datas: {
        ...experienceDatas.datas,
        [experienceInfo.id]: experienceInfo,
      },
    })


  },[]); */


  const resultRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resultRef.current,
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
          educationDatas={educationDatas}
          setEducationDatas={setEducationDatas}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
          experienceDatas={experienceDatas}
          setExperienceDatas={setExperienceDatas}
          handlePrint={handlePrint}/>
        <Result 
          generalInfo={generalInfo}
          educationInfo={educationDatas}
          experienceInfo={experienceDatas}
          ref={resultRef}/> {/* Changed this line */}
      </div>
      <Footer/>
    </>
  );
}

export default App;
