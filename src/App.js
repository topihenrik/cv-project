import Header from "./components/Header";
import Editor from "./components/Editor"
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Editor/>
        <Result/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
