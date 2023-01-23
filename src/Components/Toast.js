import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
function Message({ variant, message, modal, setModal }) {
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer
          position="top-center"
          className="p-5"
          containerPosition="fixed"
        >
          <Toast
            bg={variant}
            onClose={() => setModal(false)}
            show={modal}
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Confirmation</strong>
            </Toast.Header>
            <Toast.Body
              style={{
                color: "whitesmoke",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              {message}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default Message;
