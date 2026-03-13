import "./Analytics.css"

function Analytics(){

  return(

    <div className="analytics-page">

      <h1>Developer Analytics</h1>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h3>LeetCode Progress</h3>
          <p>Easy: 120</p>
          <p>Medium: 160</p>
          <p>Hard: 40</p>
        </div>

        <div className="analytics-card">
          <h3>GitHub Activity</h3>
          <p>Commits this month: 95</p>
          <p>Repositories: 12</p>
          <p>Pull Requests: 18</p>
        </div>

        <div className="analytics-card">
          <h3>Consistency Score</h3>
          <p className="score">82%</p>
          <span>Based on coding streak</span>
        </div>

        <div className="analytics-card">
          <h3>Interview Probability</h3>
          <p className="score">76%</p>
          <span>AI predicted</span>
        </div>

      </div>

    </div>

  )

}

export default Analytics