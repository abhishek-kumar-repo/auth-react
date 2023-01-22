import { useNavigate } from "react-router-dom";
import TodoForm from "./components/TodoForm";
const Dashboard = ({ setToken }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", JSON.stringify(false));
    setToken(false);
    navigate("/");
  };
  return (
    <div className="h-screen">
      <div className=" flex justify-between mx-2 my-2  text-red-800">
        <span className="text-3xl ">Dashboard</span>
        <span onClick={logout} className="cursor-pointer text-red-800">
          Logout
        </span>
      </div>
      <TodoForm />
    </div>
  );
};
export default Dashboard;
