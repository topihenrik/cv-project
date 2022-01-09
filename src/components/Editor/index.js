import React, {Component} from "react";
import "./style.css";

class Editor extends Component {


    render() {
        return(
            <div className="editorBox">
                <section className="informationBox">
                    <h3 className="informationTitle">General Information</h3>
                    <input className="inputStyle1" placeholder="First name"></input>
                    <input className="inputStyle1" placeholder="Last name"></input>
                    <input className="inputStyle1" placeholder="Email"></input>
                    <input className="inputStyle1" placeholder="Phone number"></input>
                    <input className="inputStyle1" placeholder="Address"></input>
                    <textarea className="inputStyle3" placeholder="Additional information"></textarea>
                </section>
                <section className="informationBox">
                    <h3 className="informationTitle">Education</h3>
                    <input className="inputStyle1" placeholder="School name"></input>
                    <input className="inputStyle1" placeholder="City"></input>
                    <input className="inputStyle1" placeholder="Subject"></input>
                    <div>
                        <input className="inputStyle2" placeholder="From"></input>
                        <input className="inputStyle2" placeholder="To"></input>
                    </div>
                    <textarea className="inputStyle3" placeholder="Additional information"></textarea>
                </section>
                <section className="informationBox">
                    <h3 className="informationTitle">Experience</h3>
                    <input className="inputStyle1" placeholder="Company name"></input>
                    <input className="inputStyle1" placeholder="Position"></input>
                    <input className="inputStyle1" placeholder="City"></input>
                    <div>
                        <input className="inputStyle2" placeholder="From"></input>
                        <input className="inputStyle2" placeholder="To"></input>
                    </div>
                    <textarea className="inputStyle3" placeholder="Additional information"></textarea>
                </section>
                <button>Submit</button>  
            </div>
        );
    };
}

export default Editor;