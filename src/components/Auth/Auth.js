import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = ({setToken}) => {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div>
      {login ? (
        <Login handleLogin={handleLogin} setToken={setToken}/>
      ) : (
        <Register handleLogin={handleLogin} setToken={setToken} />
      )}
    </div>
  );
};
export default Auth;
