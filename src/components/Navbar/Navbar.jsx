import React from "react";
import { Link } from "react-router-dom";
import usericon from "../../img/default-user-icon.webp";
import logo from "../../img/worm.png";
import likeicon from "../../img/like (1).png";
import bell from "../../img/bell.png";
import "./Navbar.css";
const Navbar = () => {
  const handleNotificationClick = () => {
    // Действие при клике на иконку уведомлений
  };

  const handleLikeClick = () => {
    // Действие при клике на иконку лайка
  };

  const handleUserClick = () => {
    // Действие при клике на иконку пользователя
  };

  return (
    <div className="nav-bar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Логотип" className="logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="link">
          Проблемы
        </Link>
        <Link to="/" className="link">
          Изучить
        </Link>
        <Link to="/" className="link">
          Конкурс
        </Link>
        <Link to="/" className="link">
          Обсуждение
        </Link>
      </div>
      <div className="nav-icons">
        <div className="icon-wrapper" onClick={handleNotificationClick}>
          <img src={bell} alt="Уведомления" className="icon" />
        </div>
        <div className="icon-wrapper" onClick={handleLikeClick}>
          <img src={likeicon} alt="Лайк" className="icon" />
        </div>
        <div className="icon-wrapper" onClick={handleUserClick}>
          <img
            src={usericon}
            alt="Пользователь"
            id="userIcon"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
