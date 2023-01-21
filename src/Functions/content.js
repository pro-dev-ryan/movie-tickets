import Cards from "../Components/Cards";
import { useProduct } from "../Contexts/ContextProduct";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contents = () => {
  const {
    state: { loading, error, cards },
  } = useProduct();
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (!loading && cards?.length) {
    content = cards.map((card, i) => <Cards key={i} card={card} />);
  }
  if (!loading && error) {
    content = <p>Something went wrong, Please try again later!</p>;
  }

  return (
    <Row className="container-md d-lg-flex mx-0 my-2 justify-content-center my-lg-5 gap-lg-5">
      {content}
    </Row>
  );
};
export default Contents;
