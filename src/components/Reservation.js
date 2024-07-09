import React, { useState } from "react";
import "./Reservation.css";

const roomPrices = {
  single: 100,
  double: 200,
  suite: 300,
  deluxe: 500,
};

function Reservation() {
  const [isVisible, setIsVisible] = useState(false);

  const handleContactButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("single");
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const price = diffDays * roomPrices[roomType] * guests;
    setTotalPrice(price);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculatePrice();
  };

  return (
    <div className="reservation-container">
      <button
        onClick={handleContactButtonClick}
        className="btn btn-primary mt-3 d-block mx-auto"
      >
        Reservation
      </button>

      {isVisible && (
        <div className="mt-4">
          <h4>Room Reservation Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="checkIn">Check-In Date:</label>
              <input
                type="date"
                id="checkIn"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOut">Check-Out Date:</label>
              <input
                type="date"
                id="checkOut"
                className="form-control"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="guests"
                className="form-control"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                min="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomType">Room Type:</label>
              <select
                id="roomType"
                className="form-control"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
                <option value="deluxe">Deluxe</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary d-block mx-auto">
              Calculate Price
            </button>
          </form>
          <div className="total-price mt-3">
            {totalPrice > 0 && <h3>Total Price: ${totalPrice}</h3>}
          </div>
        </div>
      )}

      {isVisible && (
        <div className="mt-4">
          <div className="contact-info mb-4">
            <h5>Contact Information</h5>
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
              <button type="submit" className="btn btn-primary d-block mx-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;
