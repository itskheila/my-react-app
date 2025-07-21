import Search from "./Search";

import All from "./All";

import NavComponent from "./NavComponent";

import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <NavComponent />
      <Outlet />
      
    </div>
  );
}

export default Dashboard;