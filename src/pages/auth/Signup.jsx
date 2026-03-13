import "./Signup.css"
import { Link } from "react-router-dom";

function Signup(){

  return(

    <div className="signup-page">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Start tracking your developer journey with <span id="a">Career</span><span id="b">Tracker</span></p>

        <form className="signup-form">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login">login</Link>
        </p>

      </div>

    </div>

  )

}

export default Signup