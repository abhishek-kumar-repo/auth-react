import { useNavigate } from "react-router-dom";
const Dashboard = ({ setToken, pageNavigation }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", JSON.stringify(false));
    setToken(false);
    navigate("/");
  };
  return (
    <div className="h-screen">
      <span className="text-3xl flex justify-center items-center">
        Dashboard
      </span>
      <div>
        <button onClick={logout} className="cursor-pointer text-red-800">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
