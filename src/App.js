import React, { useRef, useState } from "react";
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

  /* const initEduId = uniqid(); */
  const [educationDatas, setEducationDatas] = useState({
    datas: {
      /* [initEduId]: {
        schoolName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        additionalInfo: "",
        id: initEduId,
        id2: uniqid(),
      } */
    },
  })

 /*  const initExpId = uniqid(); */
  const [experienceDatas, setExperienceDatas] = useState({
    datas: {
      /* [initExpId]: {
        companyName: "",
        position: "",
        city: "",
        from: "",
        to: "",
        additionalInfo: "",
        id: initExpId,
        id2: uniqid(),
      } */
    },
  })

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
          educationDatas={educationDatas}
          setEducationDatas={setEducationDatas}
          experienceDatas={experienceDatas}
          setExperienceDatas={setExperienceDatas}
          handlePrint={handlePrint}/>
        <Result 
          generalInfo={generalInfo}
          educationDatas={educationDatas}
          experienceDatas={experienceDatas}
          ref={resultRef}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
