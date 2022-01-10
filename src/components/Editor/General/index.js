import React from "react";
import "./style.css";



function General(props) {
    const {generalInfo, setGeneralInfo} = props;

    function handleChange(e) {
        const value = e.target.value;
        setGeneralInfo({
            ...generalInfo,
            [e.target.name]: value});
    }

    return(
        <section className="informationBox">
            <h3 className="informationTitle">General Information</h3>
            <input 
                className="inputStyle1" 
                placeholder="First name" 
                type="text" 
                name="firstName"
                value={generalInfo.firstName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Last name" 
                type="text"
                name="lastName" 
                value={generalInfo.lastName}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Title"
                type="text"
                name="title" 
                value={generalInfo.title}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Email"
                type="text"
                name="email" 
                value={generalInfo.email}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Phone number"
                type="text"
                name="phoneNumber" 
                value={generalInfo.phoneNumber}
                onChange={handleChange}/>
            <input 
                className="inputStyle1" 
                placeholder="Address"
                type="text"
                name="address" 
                value={generalInfo.address}
                onChange={handleChange}/>
            <textarea 
                className="inputStyle3" 
                placeholder="Additional information"
                type="text"
                name="additionalInfo" 
                value={generalInfo.additionalInfo}
                onChange={handleChange}/>
        </section>
    );
}

export default General;