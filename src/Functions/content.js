import Cards from "../Components/Cards";
import { useProduct } from "../Contexts/ContextProduct";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

const Contents = () => {
  const {
    state: { loading, error, cards },
  } = useProduct();
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (!loading && cards?.length) {
    content = cards.map((card, i) => (
      <Col>
        <Cards key={i} card={card} />
      </Col>
    ));
  }
  if (!loading && error) {
    content = <p>Something went wrong, Please try again later!</p>;
  }

  return <Row className="my-5">{content}</Row>;
};
export default Contents;
