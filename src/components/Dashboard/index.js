const Dashboard = ({ setToken }) => {
  const logout = () => {
    localStorage.setItem("token", JSON.stringify(false));
    setToken(false);
  };
  return (
    <div className="h-screen">
      <span className="text-3xl flex justify-center items-center">Dashboard</span>
      <div>
        <button onClick={logout} className="cursor-pointer text-red-800">Logout</button>
      </div>
    </div>
  );
};
export default Dashboard;
