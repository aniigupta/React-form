import React from "react";

function Form() {
  return (
    <form className="container">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter your name" name="name"></input>
       </div>
       <div>
        <input type="text" placeholder="Enter your email" name="email"></input>
       </div>
       <div>
        <input type="text" placeholder="Enter your password" name="password"></input>
       </div>
       <div>
        <button type="submit" >Submit</button>
       </div>
    </form>
  );
}
export default Form;
