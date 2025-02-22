import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [hobbiesVisible, setHobbiesVisible] = useState(false);

  const handleHobbyClick = () => {
    setHobbiesVisible((prev) => !prev); // Toggle visibility
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
            <h2>About Me</h2>
            <img
              src="/ROSELOIMAGE.jpg"
              alt="John Daniel F. Roselo"
              className="img-fluid rounded-circle mb-3"
              width="200"
            />
            <h3>Education:</h3>
            <p>Senior High School Diploma - Lyceum of Alabang</p>
            <p>
              Currently pursuing Information Technology at Lyceum of Alabang
            </p>

            <h3>School Activities:</h3>
            <p>HUMSS - Makatao Club</p>
            <p>Classroom Officer</p>

            <h3>Skills:</h3>
            <p>Web Development (HTML, CSS, JavaScript, Bootstrap)</p>
            <p>Graphic Design (Adobe Photoshop, Canva)</p>
            <p>Public Speaking and Leadership</p>

            <h3>Hobbies:</h3>
            <button onClick={handleHobbyClick} className="btn btn-primary mt-3">
              {hobbiesVisible ? "Hide My Hobbies" : "Show My Hobbies"}
            </button>

            {hobbiesVisible && (
              <ul className="mt-3">
                <li>Reading</li>
                <li>Playing Video Games</li>
                <li>Streaming</li>
                <li>Coding</li>
              </ul>
            )}
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

export default About;
