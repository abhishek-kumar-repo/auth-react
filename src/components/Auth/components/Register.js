import React from "react";

const Register = ({ handleLogin }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-bold text-[100px]">Register Page</h1>
      <a
        onClick={() => handleLogin()}
        className="cursor-pointer hover:text-green-600"
      >
        Login
      </a>
    </div>
  );
};
export default Register;
