import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import { useSelector } from "react-redux";

//1. 전체상품페이지, 로그인 , 상품상세페이지
//2. 전체상품페이지는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나 , 로그인이 안되어있을 경우에는 로그인 페이지가 나옴
//5. 로그인이 되어 있는 경우 , 상품 디테일 페이지를 볼 수 있다
//6. 로그아웃 버튼을 누르면 로그아웃이 된다.
//7. 로그아웃이 되면 상품디테일 페이지를 볼 수 없다.다시 로그인 페이지가 보인다
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다

function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
