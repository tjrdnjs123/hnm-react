import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state=>state.product.productList)
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  
  const getProducts = () => {
    console.log("query : ", searchQuery);
    dispatch(productAction.getProducts(searchQuery))
    
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3}  xs={12} key={index}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
