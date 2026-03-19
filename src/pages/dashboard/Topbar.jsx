import { Link } from "react-router-dom"
import "./Topbar.css"

function Topbar(){
  return(
    <div className="topbar">

      <h3>Developer Dashboard</h3>

      <h4 className="bio">
        Code is not just instructions for a machine — it’s a conversation with the future.
      </h4>

      <div className="profile">
        <Link to="profile">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="dp"
          />
        </Link>
      </div>

    </div>
  )
}

export default Topbar
