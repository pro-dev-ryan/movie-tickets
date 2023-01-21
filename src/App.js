// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="mx-5">
      <h1 className="text-center mt-4 fw-bold">Welcome to the Show-Time</h1>
      <Row>
        <Col className="col-7 bg-danger d-flex flex-wrap gap-lg-5 justify-content-center">
          {[...Array(3)].map((card, i) => (
            <Cards key={i} />
          ))}
        </Col>
        <Col className="col-5 bg-info">Side</Col>
      </Row>
    </div>
  );
}

export default App;
