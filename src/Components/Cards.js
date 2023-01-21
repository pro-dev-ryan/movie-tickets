import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cards = ({ card: { show } }) => {
  const { name, image, rating, language, summary, id } = show;
  const cleanText = summary.replace(/<\/?[^>]+(>|$)/g, " ");
  return (
    <Card
      style={{ maxWidth: "380px", minHeight: "520px" }}
      className="my-lg-5 my-2 mx-0 shadow border-0"
    >
      <Card.Img
        variant="top"
        style={{ height: "280px", width: "340px" }}
        className="img-fluid mt-2 mx-auto mt-md-3 border-0 rounded"
        src={image?.medium ? image.medium : "No Image"}
      />
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
  );
};

export default Cards;
