/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Login = ({ handleLogin }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-bold text-[100px]">Login Page</h1>
      <a
        onClick={() => handleLogin()}
        className="cursor-pointer hover:text-green-600"
      >
        {" "}
        Register
      </a>
    </div>
  );
};
export default Login;
