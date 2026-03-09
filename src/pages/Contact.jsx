import "./Contact.css"
import Navbar from "../components/Navbar";

function Contact(){

  return(

    <>
        <Navbar />
        <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <h1>Contact <span>Us</span></h1>

        <p>
          Have questions or feedback? We'd love to hear from you.
        </p>

      </section>


      {/* CONTACT SECTION */}

      <section className="contact-container">

        {/* CONTACT INFO */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>Email: support@neuromirror.ai</p>

          <p>Partnerships: partners@neuromirror.ai</p>

          <p>Location: Remote / Global</p>

          <div className="social-links">

            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>

          </div>

        </div>


        {/* CONTACT FORM */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>

    </>
  );
}

export default Contact