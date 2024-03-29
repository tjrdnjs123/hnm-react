import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  console.log("query : ", searchQuery);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/tjrdnjs123/hnm-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data:", data);
    setProductList(data);
    console.log("ppp", productList);
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
