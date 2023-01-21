import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsPage from "../../Components/DetailsPage";
import { useProduct } from "../../Contexts/ContextProduct";

const Details = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const {
    state: { loading, error, cards },
  } = useProduct();

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (!loading && cards) {
    const item = cards.find((i) => i?.show?.id === parseInt(id));
    content = <DetailsPage item={item} />;
  }
  if (!loading && error) {
    content = <p>Something went wrong, Please try again later!</p>;
  }
  return <div>{content}</div>;
};

export default Details;
