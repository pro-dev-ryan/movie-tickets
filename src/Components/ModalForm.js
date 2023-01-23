import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function Example({ show, setShow, name, setModal, setBook }) {
  const handleClose = () => setShow(false);
  const handleAction = () => {
    setModal(true);
    setShow(false);
  };
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const show = form.show.value;
    const name = form.name.value;
    const mail = form.mail.value;
    const data = { show, name, mail };
    const prev = localStorage.getItem("entry");
    if (prev) {
      const stored = JSON.parse(prev);
      if (
        !stored?.mail.includes(data?.mail) &&
        !stored?.show.includes(data?.show)
      ) {
        return localStorage.setItem("entry", JSON.stringify(data));
      } else {
        return setBook("Already Booked, Please Check Your Mail");
      }
    }
    localStorage.setItem("entry", JSON.stringify(data));
    setBook("Successfully Booked, Please Check your mail for details");
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Your Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBooking}>
            <div>
              <Form.Group>
                <Form.Label htmlFor="show">Show Name</Form.Label>
                <Form.Control
                  type="text"
                  name="show"
                  id="show"
                  value={name}
                  readOnly
                />
              </Form.Group>
              <Form.Group>
                <Form.FloatingLabel htmlFor="name">
                  Customer Name
                </Form.FloatingLabel>
                <Form.Control type="text" id="name" name="name" />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="mail">Customer Email</Form.Label>
                <Form.Control type="text" id="mail" name="mail" />
              </Form.Group>
              <Button
                onClick={handleAction}
                className="w-100 mt-3"
                variant="info"
                type="submit"
              >
                Book Now
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
