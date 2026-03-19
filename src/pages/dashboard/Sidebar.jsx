import { Link } from "react-router-dom"
import "./Sidebar.css"

function Sidebar(){
  return(
    <div className="sidebar">

      <h2>Career <span style={{color:"white"}}>Tracker</span></h2>

      <ul>
        <li><Link to="Dhome">Dashboard Home</Link></li>
        <li><Link to="analytics">Analytics</Link></li>
        <li><Link to="integrations">Integrations</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar
