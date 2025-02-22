import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message Sent! \nName: ${name} \nEmail: ${email} \nSubject: ${subject} \nMessage: ${message}`
    );
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>ROSELO</h1>
              <nav>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <h2>Contact Me</h2>

            {/* Image added here */}
            <img
              src="/ROSELOIMAGE.jpg"
              alt="John Daniel F. Roselo"
              className="img-fluid rounded-circle mb-3"
              width="200"
            />

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container text-center">
          <p>&copy; 2025 ROSELO. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
