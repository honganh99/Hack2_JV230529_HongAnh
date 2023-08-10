import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav-menu">
        <p>NIKKOCHAN</p>
        <ul className="menu-product">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">PAGES</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <ul className="menu-icon">
          <li>
            <i className="fa-solid fa-user" />
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass" />
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
