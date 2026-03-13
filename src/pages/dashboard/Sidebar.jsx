import { Link } from "react-router-dom"
/*import "./Sidebar.css"*/

function Sidebar(){

  return(

    <div className="sidebar">

      <h2>Career <span style={{color:"white"}}>Tracker</span></h2>

      <ul>

        <li>Dashboard</li>
        <Link to="/analytics"><li>Analytics</li></Link>
        <Link to="/integrations"><li>Integrations</li></Link>
        <li>Profile</li>
        <li>Settings</li>

      </ul>

    </div>

  )

}

export default Sidebar