import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img-area">
          <img src={product?.img} className="product-img" alt=""/>
        </Col>
        <Col className="product-text-area">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? <h6>Consious Choice</h6> : ""}</div>
          <select className="size-select">
            <option disabled selected>
              사이즈 선택
            </option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
          </select>
          <div><button className="add-btn">추가</button></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
