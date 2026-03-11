import { Outlet } from "react-router-dom";

import "./Dashboard.css"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

function Dashboard(){

  return(
    <>
    <Sidebar/>
    <Topbar/>
    <Outlet/>
    </>
    
    
  )

}

export default Dashboard