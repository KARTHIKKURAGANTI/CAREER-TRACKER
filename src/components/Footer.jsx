import "./Footer.css"

function Footer(){
  return(

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Career <span>Tracker</span></h2>
          <p>
            AI powered career tracker for developers.
            Track your coding journey and grow faster.
          </p>
        </div>

        <div className="footer-links">
          <h3>Product</h3>
          <a href="#">Features</a>
          <a href="#">Dashboard</a>
          <a href="#">Integrations</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-links">
          <h3>Social</h3>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Career Tracker. All rights reserved.</p>
      </div>

    </footer>

  )
}

export default Footer