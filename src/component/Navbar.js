import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setAuthenticate, authenticate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  };
  const logOut = () => {
    setAuthenticate(false);
  };
  const handleClick = () => {
    if (authenticate) {
      logOut();
    } else {
      goToLoginPage();
    }
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const logoClick = () => {
    navigate("/");
  };
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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴의 보임/숨김 상태를 토글
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <div className="login-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faUser} />
        <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
      </div>
      <div className="nav-section">
        <img
          className="logo-img"
          onClick={logoClick}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          alt=""
        />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: "burlywood" }} />
      </div>
      {/* 햄버거 메뉴가 보여지는 부분 */}
      {isMenuOpen && (
        <div className="drop-down-menu-area">
          <div className="close-menu-toggle" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <ul className="drop-down-menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} />
        <input
          id="search-input"
          type="text"
          placeholder="제품검색"
          onKeyPress={(event) => search(event)}
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
