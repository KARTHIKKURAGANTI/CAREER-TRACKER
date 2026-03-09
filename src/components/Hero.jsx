import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Track Your <span className="span">Effort.</span><br />
          <span className="span">Predict Your</span> Career.
        </h1>

        <p>
          Connect your LeetCode, GitHub, and LinkedIn profiles.
          NeuroMirror AI analyzes your consistency and predicts
          your chances of landing top tech jobs.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">See How It Works</button>
        </div>

      </div>
    </section>
  )
}

export default Hero