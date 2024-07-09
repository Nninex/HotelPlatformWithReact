import React from "react";
import "./SignUp.css";

function SignUp() {
  const signUp = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;

    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Sign-Up Details:");
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="form-container">
        <form id="signUpForm" onSubmit={signUp}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="retypePassword">Retype Password</label>
            <input
              type="password"
              className="form-control"
              id="retypePassword"
              name="retypePassword"
              required
            />
          </div>
          <button type="submit" className="social-button btn-success">
            Sign Up
          </button>
        </form>
        <hr />
        <p>
          {" "}
          already have an account?{" "}
          <a className="button" href="/signin">
            Sign In
          </a>{" "}
        </p>
        <div className="social-buttons">
          <button className="social-button btn-primary facebook">
            <i className="fab fa-facebook-f"></i> Sign Up with Facebook
          </button>
          <button className="social-button btn-light google">
            <i className="fab fa-google"></i> Sign Up with Google
          </button>

          <button className="social-button btn-dark x">
            <i className="fab fa-twitter"></i> Sign Up with X
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
