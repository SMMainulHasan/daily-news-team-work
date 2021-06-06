import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/Actions/Actions";
import ArticleCard from "../ArticleCard/ArticleCard";

const MainBody = () => {
  const data = useSelector((state) => state.dataReducer.data.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  console.log(data);
  return (
    <Container>
      <Row>
        <Col md={8}>
          {data?.map((elm) => (
            <ArticleCard article={elm} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;
