import React, { useState } from "react";

function Form() {
    const data ={name:"" ,email:"" , password:""};
    const [inputData, setinputData] =useState(data)
    function handleData(e){
    setinputData({...inputData, [e.target.name]:e.target.value})
  console.log(inputData)
    }
    return (
    <form className="container">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}></input>
       </div>
       <div>
        <input type="text" placeholder="Enter your email" name="email" value={inputData.email} onChange={handleData}></input>
       </div>
       <div>
        <input type="text" placeholder="Enter your password" name="password" value={inputData.password} onChange={handleData}></input>
       </div>
       <div>
        <button type="submit" >Submit</button>
       </div>
    </form>
  );
}
export default Form;
