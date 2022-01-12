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
    companyName: "",
    position: "",
    city: "",
    from: "",
    to: "",
    additionalInfo: "",
    id: uniqid(),
    id2: uniqid(),
  });

  const [experienceDatas, setExperienceDatas] = useState({
    datas: {},
  })



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
      ...experienceInfo,
    })

    setExperienceDatas({
      datas: {
        ...experienceDatas.datas,
        [experienceInfo.id]: experienceInfo,
      },
    })


  },[]);


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
