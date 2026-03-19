import { Outlet } from "react-router-dom";
import "./Dashboard.css"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

function Dashboard(){
  return(
    <div className="dashboard-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="dashboard-main">

        {/* Topbar */}
        <Topbar />

        {/* Dynamic Content */}
        <div className="dashboard-content">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
