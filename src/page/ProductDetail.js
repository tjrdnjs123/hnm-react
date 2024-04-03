import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/reducers/productReducer";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);
  let { id } = useParams();
  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img-area">
          <img src={product?.img} className="product-img" alt="" />
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
          <div>
            <button className="add-btn">추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
