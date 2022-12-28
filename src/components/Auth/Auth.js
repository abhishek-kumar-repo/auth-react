import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = () => {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div>
      {login ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Register handleLogin={handleLogin} />
      )}
    </div>
  );
};
export default Auth;
