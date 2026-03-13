import "./Login.css"
import { Link } from "react-router-dom";

function Login(){

  return(

    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to continue your <span id="a">Career</span><span id="b">Tracker</span> journey</p>

        <form className="login-form">

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
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>

    </div>

  )

}

export default Login