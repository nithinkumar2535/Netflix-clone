import React from "react";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className="mt-2">
      <p>Questions? Call 000-800-919-1694</p>
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                FAQ
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Investor Relations
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Privacy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Speed Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <button className="btn-language">
                English <i class="fa-solid fa-caret-down"></i>
              </button>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Netflix India
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Help Centre
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Jobs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Cookie Preferences
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Account
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Ways to Watch
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Corporate Information
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Only on Netflix
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Media Centre
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Terms of Use
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
