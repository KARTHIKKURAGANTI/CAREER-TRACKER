import Navbar from "../components/Navbar"
import "./Pricing.css"


function Pricing(){

  return(
<>
            <Navbar />
            <div className="pricing-page">

            {/* HERO */}

            <section className="pricing-hero">

                <h1>Simple Pricing</h1>

                <p>
                Choose the plan that fits your developer journey.
                </p>

            </section>


            {/* PRICING CARDS */}

            <section className="pricing-cards">

                <div className="price-card">

                <h3>Free</h3>

                <h2>$0</h2>

                <p>Perfect for students starting their journey.</p>

                <ul>
                    <li>Basic coding activity tracking</li>
                    <li>GitHub analysis</li>
                    <li>Weekly progress report</li>
                </ul>

                <button>Start Free</button>

                </div>


                <div className="price-card pro">

                <h3>Pro</h3>

                <h2>$9/mo</h2>

                <p>For serious developers improving their career.</p>

                <ul>
                    <li>AI career prediction</li>
                    <li>Advanced coding analytics</li>
                    <li>Skill gap analysis</li>
                    <li>Priority insights</li>
                </ul>

                <button>Get Pro</button>

                </div>


                <div className="price-card">

                <h3>Enterprise</h3>

                <h2>Custom</h2>

                <p>For universities and training programs.</p>

                <ul>
                    <li>Student analytics dashboard</li>
                    <li>Batch performance tracking</li>
                    <li>Dedicated support</li>
                </ul>

                <button>Contact Us</button>

                </div>

            </section>


            {/* CTA */}

            <section className="pricing-cta">

                <h2>Start <span>Your</span> Developer <span>Growth</span> Today</h2>

                <button>Get Started Free</button>

            </section>

            </div>
</>

  )

}

export default Pricing