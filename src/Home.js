import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
          <div className="container text-center">
            <h2>Welcome to My Portfolio!</h2>
            <p>
              Hello, I’m John Daniel F. Roselo. I'm currently in 3rd Year
              College at Lyceum of Alabang. I'm passionate about Coding.
            </p>
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

export default Home;
