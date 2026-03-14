import "./Profile.css"
import { useNavigate } from "react-router-dom"

function Profile(){
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return(

    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="profile"
          className="profile-dp"
        />

        <h2>Karthik</h2>

        <p>karthik@email.com</p>

        <div className="profile-buttons">

          <button className="edit-btn">
            Edit Profile
          </button>

          
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

        </div>

      </div>

    </div>

  )

}

export default Profile




