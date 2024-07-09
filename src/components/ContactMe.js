import React, { useState } from "react";

function ContactMe() {
  const [isVisible, setIsVisible] = useState(false);

  const handleContactButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <button onClick={handleContactButtonClick} className="btn btn-light mt-3">
        Contact Us
      </button>
      {isVisible && (
        <div className="mt-4">
          <div className="contact-info mb-4">
            <h6>Contact Information</h6>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Main St, Atown, Country
            </p>
            <h6>Follow Us</h6>
            <p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              |
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Twitter
              </a>{" "}
              |
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Instagram
              </a>
            </p>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="newsletter">Subscribe to our newsletter</label>
              <input
                type="email"
                className="form-control"
                id="newsletter"
                placeholder="Enter your email for newsletter"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactMe;
