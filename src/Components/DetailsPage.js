import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ControlledCarousel from "./Slider";
import { Link } from "react-router-dom";
import { useState } from "react";
import Example from "./ModalForm";
import Message from "./Toast";

const DetailsPage = ({ item, id }) => {
  // modal state
  const [show, setShow] = useState(false);
  // toast state
  const [modal, setModal] = useState(false);
  // message for toast state and variable
  const [book, setBook] = useState("");
  const variant = book.includes("Already") ? "danger" : "success";
  const { runtime, genres, image, name, summary, premiered, status } =
    item?.show;
  // tags removed summary
  const filtered = summary?.replace(/<\/?[^>]+(>|$)/g, " ");
  return (
    <Row className="container-lg container-fluid mx-md-0 mx-lg-auto m-0 my-md-5 my-2 py-lg-2">
      <Link
        style={{
          textDecoration: "none",
          background: "skyblue",
          padding: "8px 4px",
          borderRadius: "4px",
        }}
        to="/"
      >
        Back to Home
      </Link>
      <Col className="d-md-flex flex-md-column align-items-flex-end d-none p-1 d-md-block">
        <Image src={image?.original} alt={name} className="img-fluid" />
      </Col>
      <Col className="mt-5 mt-md-1 d-md-flex flex-md-column  text-center text-md-left w-50 align-items-md-flex-end">
        <h2 className="d-none d-md-block">{name}</h2>
        {/* small screen show-name */}
        <h4 className="d-md-none">{name}</h4>
        <Col className="w-100 mx-auto d-md-none">
          <Image
            src={image?.original}
            alt={name}
            className="img-fluid mt-2 mb-4"
          />
        </Col>
        <div className="d-md-flex fw-bold justify-content-between">
          <p className="mb-0">
            Genres:
            {genres.map((genre, i) => (
              <span className="px-1 fw-normal" key={i}>
                {genre}
              </span>
            ))}
          </p>
          <p>
            Runtime: <span className="fw-normal">{runtime} Min</span>
          </p>
        </div>
        <Col className="d-md-flex fw-bold justify-content-md-between align-items-md-flex-end">
          <p className="m-0">
            Status: <span className="fw-normal">{status}</span>
          </p>
          <p>
            On-Aired: <span className="fw-normal">{premiered}</span>
          </p>
        </Col>
        <p>{filtered}</p>
        <Button
          variant="info"
          onClick={() => setShow(true)}
          className="btn btn-primary w-lg-75 fw-bold w-md-50 mb-5"
        >
          Book Ticket
        </Button>
        <h4 className="mt-lg-3">Most Popular</h4>
        <div className="mt-lg-1 text-center w-100">
          <ControlledCarousel id={id} />
        </div>
      </Col>
      {/* Modal component */}
      <Example
        show={show}
        setModal={setModal}
        setBook={setBook}
        name={name}
        setShow={setShow}
      />
      {/* Toast component */}
      <Message
        modal={modal}
        setModal={setModal}
        variant={variant}
        message={book}
      />
    </Row>
  );
};

export default DetailsPage;
