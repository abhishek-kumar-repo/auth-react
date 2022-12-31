import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth/Auth";
import { useState } from "react";
import Dashboard from "./components/Dashboard";


function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  if(!token){
    return  <Auth setToken={setToken}/>
  }

  return <div>{<Dashboard setToken={setToken}/>}</div>;
}

export default App;
