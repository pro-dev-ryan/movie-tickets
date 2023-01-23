import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Cards = ({ card: { show } }) => {
  const { name, image, rating, language, summary, id, network, status, type } =
    show;
  const cleanText = summary.replace(/<\/?[^>]+(>|$)/g, " ");
  return (
    <>
      {/* Cards for smaller screens */}
      <Card
        style={{ maxWidth: "380px", minHeight: "420px" }}
        className="my-lg-5 my-2 mx-0 shadow-sm d-md-none border-0"
      >
        <Col>
          <Card.Img
            variant="top"
            className="img-fluid mt-2 mx-auto border-0 rounded"
            src={image?.medium ? image.medium : "No Image"}
          />
        </Col>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="">{name}</Card.Title>{" "}
            <div>
              <h6>Language: {language}</h6>
            </div>
          </div>
          <Card.Text>
            {cleanText.length > 100
              ? cleanText.slice(0, 157) + " ..."
              : cleanText}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/${id}`} className="btn btn-primary w-md-25">
              Details
            </Link>{" "}
            <h5>
              Rating: <span>{rating?.average}</span>{" "}
            </h5>
          </div>
        </Card.Body>
      </Card>
      {/* Cards for larger screens */}
      <Card
        style={{ maxWidth: "380px", minHeight: "420px" }}
        className="my-lg-5 d-none d-md-block my-2 mx-0 shadow-sm border-0"
      >
        <Row>
          <Col className="w-50">
            <Card.Img
              variant="top"
              className="img-fluid mt-2 mx-auto border-0 rounded"
              src={image?.medium ? image.medium : "No Image"}
            />
          </Col>
          <Col className="mt-3 text-end">
            <div>
              <Card.Title className="">{name}</Card.Title>{" "}
              <div>
                <h6>Language: {language}</h6>
                <p>
                  Country:{" "}
                  {network?.country?.name ? network?.country?.name : "N/A"}
                </p>
                <p>Show-Type: {type}</p>
                <p>Status: {status}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Card.Body>
          <Card.Text>
            {cleanText.length > 100
              ? cleanText.slice(0, 157) + " ..."
              : cleanText}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/${id}`} className="btn btn-primary w-md-25">
              Details
            </Link>{" "}
            <h5>
              Rating: <span>{rating?.average ? rating.average : "N/A"}</span>{" "}
            </h5>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
