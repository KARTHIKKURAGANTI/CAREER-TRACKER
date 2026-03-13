import "./Integrations.css"

function Integrations(){

  return(

    <div className="integrations-page">

      <h1>Connect Your Accounts</h1>

      <p className="sub">
        Link your developer profiles to track your career progress
      </p>

      <div className="integrations-grid">

        <div className="integration-card">
          <h3>GitHub</h3>
          <p>Track commits, repositories and open source work</p>
          <button>Connect GitHub</button>
        </div>

        <div className="integration-card">
          <h3>LeetCode</h3>
          <p>Analyze problem solving progress and streaks</p>
          <button>Connect LeetCode</button>
        </div>

        <div className="integration-card">
          <h3>LinkedIn</h3>
          <p>Measure profile strength and networking growth</p>
          <button>Connect LinkedIn</button>
        </div>

      </div>

    </div>

  )

}

export default Integrations