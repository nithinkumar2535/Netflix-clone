import React from 'react'
import '../Banner/Banner.css'
import NavBar from '../NavBar/NavBar';

function Banner() {
  return (

    <div className="banner">
      <NavBar/>
      <div className="banner-content">
        <h1 className="banner-title">Unlimited movies, TV shows and more</h1>
        <h3 className="card-subtitle">Watch anywhere. Cancel anytime</h3>
        <p className="email-title">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <form className="email-signup">
          <input
            type="email"
            placeholder="Email adress"
          />
          <button type="submit">Get Started</button>
        </form>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default Banner



