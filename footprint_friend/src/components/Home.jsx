/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const cardImageStyle = {
    marginTop: "10px",
    marginBottom: "10px",
  };

  const shareUrl = ""; // Replace with your actual website URL

  return (
    <div>
      <div className="container text-center">
        <div className="row align-items-start mt-5">
          <div
            className="col card mx-3"
            style={{ width: "18rem", height: "30rem", opacity: 0.8 }}
          >
            <img
              src={require("../images/imgonline-com-ua-resize-EhHtR8dPC0BYEaC.jpg")}
              className="card-img-top "
              alt="..."
              style={cardImageStyle}
            />
            <div
              className="card-body "
              style={{ justifyContent: "center", position: "relative" }}
            >
              <h5 className="card-title">Carbon Emissions</h5>
              <p className="card-text">
                Easily track your Carbon Footprint using our personal Carbon
                Calculator
              </p>
              <Link to="/Calculator" className=" btn btn-custom btn-primary">
                Track your emissions
              </Link>
            </div>
          </div>

          <div
            className="col card mx-3"
            style={{ width: "18rem", height: "30rem", opacity: 0.8 }}
          >
            <img
              src="https://www.publicservicedegrees.org/wp-content/uploads/2020/04/reducing-your-carbon-footprint-banner.jpg"
              className="card-img-top"
              alt="..."
              style={cardImageStyle}
            />
            <div
              className="card-body"
              style={{ justifyContent: "center", position: "relative" }}
            >
              <h5 className="card-title">Share Your Progress</h5>
              <p className="card-text">
                Share your progress among your socials
              </p>

              <div className="d-flex flex-row mt-auto">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button btn btn-primary mx-2"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} /> Share on
                  Facebook
                </a>

                <a
                  href={`https://www.linkedin.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button btn btn-primary mx-2"
                >
                  <i className="fab fa-linkedin"></i> Share on LinkedIn
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button btn btn-primary mx-2"
                >
                  <i className="fab fa-twitter"></i> Share on Twitter
                </a>
              </div>
            </div>
          </div>

          <div
            className="col card mx-3"
            style={{ width: "18rem", height: "30rem", opacity: 0.8 }}
          >
            <img
              src="https://reneweconomy.com.au/wp-content/uploads/2013/07/personalcarbonbudgets.gif"
              className="card-img-top"
              alt="..."
              style={cardImageStyle}
            />
            <div
              className="card-body"
              style={{ justifyContent: "center", position: "relative" }}
            >
              <h5 className="card-title">Insights & Tips</h5>
              <p className="card-text">
                Visualize your carbon footprint emission through Graphs
              </p>
              <Link to="/insights" className="btn btn-custom btn-primary">
                Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
