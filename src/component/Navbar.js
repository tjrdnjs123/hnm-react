import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const goToLoginPage = () =>{
    navigate("/login")
  }
  const menuList = [
    "여성",
    "divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div className="login-button" onClick={goToLoginPage}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu , index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-container">
          <FontAwesomeIcon icon={faSearch}/>
          <input id="search-input"type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
