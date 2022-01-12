import React, { useRef, useState } from "react";
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
    headerColor: "#20639B",
  });

  const [educationDatas, setEducationDatas] = useState({
    datas: {}
  })

  const [experienceDatas, setExperienceDatas] = useState({
    datas: {}
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
