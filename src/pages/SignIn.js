import React from "react";
import "./SignUp.css";

function SignIn() {
  const signIn = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Log sign-in details
    console.log("Sign-In Details:");
    console.log("Username: " + username);
    console.log("Password: " + password);
  };

  const signInWithFacebook = () => {
    // Placeholder function for Facebook sign-in
    alert("Sign-In with Facebook clicked");
  };

  const signInWithGoogle = () => {
    // Placeholder function for Google sign-in
    alert("Sign-In with Google clicked");
  };

  const signInWithTwitter = () => {
    // Placeholder function for Twitter sign-in
    alert("Sign-In with Twitter clicked");
  };

  return (
    <div className="container">
      <h3>Sign In</h3>
      <div className="form-container">
        <form id="signInForm" onSubmit={signIn}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="social-button btn-success">
            Sign In
          </button>
        </form>
        <hr />
        <h4>Or sign in with:</h4>
        <div className="social-buttons">
          <button
            onClick={signInWithFacebook}
            className="social-button btn-primary facebook"
          >
            <i className="fab fa-facebook-f"></i> Sign In with Facebook
          </button>
          <button
            onClick={signInWithGoogle}
            className="social-button btn-light google"
          >
            <i className="fab fa-google"></i> Sign In with Google
          </button>
          <button
            onClick={signInWithTwitter}
            className="social-button btn-dark x"
          >
            <i className="fab fa-twitter"></i> Sign In with X
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
