import Auth from "./components/Auth/Auth";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <Router>
      <Routes>
        {!token ? (
          
          <Route
            exact
            path="/"
            element={<Auth setToken={setToken} />}
          ></Route>
        ) : (
          <Route
            exact
            path="/dashboard"
            element={<Dashboard setToken={setToken} />}
          ></Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
