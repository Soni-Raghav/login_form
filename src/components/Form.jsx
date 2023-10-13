import React, { useState } from "react";
const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const inputUser = (event) => {
    setUser(event.target.value);
  };
  const inputPass = (event) => {
    setPass(event.target.value);
  };
  const sub =(event)=>{
    event.preventDefault();
    setUser(user);
    setPass(pass);
  }
  return (
    <>
      <div className="formContainer">
        <div className="formDisp">
          <form action="" onSubmit={sub}>
            <span id="login">
              <label htmlFor="username">Enter User ID:</label>
              <input
                type="text"
                name="username"
                id="uid"
                onChange={inputUser}
              />
            </span>
            <span id="creditional">
              <label htmlFor="password">Enter Password:</label>
              <input type="password" name="password" id="pass" onChange={inputPass}/>
            </span>
            <span id="subBtn">
              <input type="submit" value="LOGIN" />
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
