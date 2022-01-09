import React, {Component} from "react";
import BlankAvatar from "./blank-avatar.png";
import "./style.css";



class Result extends Component {/* tertiary */

    render() {
        return(
            <div className="resultBox">
                <div className="info10">
                    <h1>Name</h1>
                    <h2>Title</h2>
                </div>
                <div className="info20">
                    <div className="info21">
                        <section className="personalDetails">
                            <img className="avatar" src={BlankAvatar} alt="Personal Avatar"/>
                            <h3>Personal Details</h3>
                        </section>
                    </div>
                    <div className="info22">
                        <section>
                            <h3>Information</h3>
                        </section>
                        <section>
                            <h3>Education</h3>
                        </section>
                        <section>
                            <h3>Experience</h3>
                        </section>
                    </div>
                </div>
                
            </div>
        );
    };
}


export default Result;
