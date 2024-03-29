import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () =>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="card" onClick={showDetail}>
      <img className="img-fluid" src={item?.img} alt=""/>
      <div>{item?.choice===true?<h6>Consious Choice</h6>:""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new===true?<h6>신제품</h6>:""}</div>
    </div>
  );
};

export default ProductCard;
