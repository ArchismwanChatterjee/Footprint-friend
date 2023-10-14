/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const cardImageStyle = {
    marginTop: "10px",
    marginBottom: "10px",
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row align-items-start mt-5">
          <div className="col card mx-3" style={{ width: "18rem",height:"32rem" }}>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carbon-footprint-hero-df3beb3.jpg?quality=90&webp=true&resize=375,341"
              className="card-img-top "
              alt="..."
              style={cardImageStyle}
            />
            <div className="card-body">
              <h5 className="card-title">Carbon Emissions</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/Calculator" className="btn btn-primary">
                Track your emissions
              </Link>
            </div>
          </div>

          <div className="col card mx-3" style={{ width: "18rem",height:"32rem" }}>
            <img
              src="https://www.publicservicedegrees.org/wp-content/uploads/2020/04/reducing-your-carbon-footprint-banner.jpg"
              className="card-img-top"
              alt="..."
              style={cardImageStyle}
            />
            <div className="card-body">
              <h5 className="card-title">Community Features</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Join Community
              </a>
            </div>
          </div>

          <div className="col card mx-3" style={{ width: "18rem",height:"32rem" }}>
            <img
              src="https://reneweconomy.com.au/wp-content/uploads/2013/07/personalcarbonbudgets.gif"
              className="card-img-top"
              alt="..."
              style={cardImageStyle}
            />
            <div className="card-body">
              <h5 className="card-title">Insights & Tips</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                See your insights
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
