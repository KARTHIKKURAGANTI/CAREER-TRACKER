
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import "./DashboardHome.css"

function DashboardHome(){

  return(

    <div className="dashboard-layout">

      <Sidebar/>

      <div className="dashboard-main">

        <Topbar/>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>LeetCode</h3>
            <p className="big">320</p>
            <span>Problems Solved</span>
          </div>

          <div className="stat-card">
            <h3>GitHub</h3>
            <p className="big">95</p>
            <span>Commits this month</span>
          </div>

          <div className="stat-card">
            <h3>LinkedIn</h3>
            <p className="big">540</p>
            <span>Connections</span>
          </div>

          <div className="stat-card">
            <h3>Consistency</h3>
            <p className="big">21</p>
            <span>Day Streak</span>
          </div>

        </div>


        <div className="job-meter">

          <h2>AI Job Readiness</h2>

          <div className="meter">
            <div className="meter-fill"></div>
          </div>

          <p>Your chances of getting interviews are increasing.</p>

        </div>
        <div className="career-insights">

            <h2>AI Career Insights</h2>

            <div className="insight-card">

                <p><strong>Consistency Score:</strong> 82%</p>

                <p><strong>Strengths</strong></p>
                <ul>
                <li>Algorithm Practice</li>
                <li>GitHub Activity</li>
                </ul>

                <p><strong>Improvement Areas</strong></p>
                <ul>
                <li>System Design</li>
                <li>Networking</li>
                </ul>

                <p className="prediction">
                AI Prediction: Your interview chances are improving 📈
                </p>

            </div>

        </div>

        </div>

    </div>

  )

}

export default DashboardHome