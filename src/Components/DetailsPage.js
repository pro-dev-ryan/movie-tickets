import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./Slider";
import { Link } from "react-router-dom";

const DetailsPage = ({ item, id }) => {
  const { runtime, genres, image, name, summary, premiered, status } =
    item?.show;

  const filtered = summary?.replace(/<\/?[^>]+(>|$)/g, " ");
  return (
    <Row className="container-lg container-fluid mx-md-0 mx-lg-auto m-0 my-md-5 p-lg-2">
      <Link style={{ textDecoration: "none" }} to="/">
        Back to Home
      </Link>
      <Col className="d-md-flex flex-column align-items-flex-end d-none p-1 d-md-block">
        <Image src={image?.original} alt={name} className="img-fluid" />
      </Col>
      <Col className="mt-5 mt-md-1 d-md-flex flex-column  text-center text-md-left w-50 align-items-md-flex-end">
        <h2 className="d-none d-md-block">{name}</h2>
        <h4 className="d-md-none">{name}</h4>
        <Col className="w-100 mx-auto d-md-none">
          <Image
            src={image?.original}
            alt={name}
            className="img-fluid mt-2 mb-4"
          />
        </Col>
        <Col className="d-flex fw-bold justify-content-between">
          <p className="h-fit mb-0">
            Genres:
            {genres.map((genre, i) => (
              <span className="px-1" key={i}>
                {genre}
              </span>
            ))}
          </p>
          <p>
            Runtime: <span className="fw-normal">{runtime}</span>
          </p>
        </Col>
        <Col className="d-md-flex fw-semibold justify-content-between">
          <p className="m-0">
            Status: <span className="fw-normal">{status}</span>
          </p>
          <p>
            On-Aired: <span className="fw-normal">{premiered}</span>
          </p>
        </Col>
        <p>{filtered}</p>
        <Button className="btn btn-primary w-lg-75 w-md-50 mb-5">
          Book Ticket
        </Button>
        <h4 className="mt-lg-3">Most Popular</h4>
        <div className="mt-lg-1 text-center w-100">
          <ControlledCarousel id={id} />
        </div>
      </Col>
    </Row>
  );
};

export default DetailsPage;
