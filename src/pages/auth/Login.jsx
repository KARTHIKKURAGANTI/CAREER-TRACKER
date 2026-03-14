import "./Login.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Login(){

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // fake login token
    localStorage.setItem("token","user_logged_in")

    // redirect to dashboard
    navigate("/dashboardHome")
  }

  return(

    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to continue your NeuroMirror journey</p>

        <form className="login-form" onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link >
        </p>

      </div>

    </div>

  )

}

export default Login
