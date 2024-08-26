import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../local-goods-logo-navbar.png";
const Navbar: React.FC = () => {
  const [user, setUser] = useState<"customer" | "vendor">("customer");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/vendor")) {
      setUser("vendor");
    } else {
      setUser("customer");
    }
  }, [location]);

  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="logo">
          <img className="logoo" src={logo} alt="local goods" />
        </div>
      </Link>
      <input
        className="search-bar"
        type="text"
        placeholder="Search product..."
        name="input"
        id=""
      />
      <div className="user-links">
        {user === "customer" ? (
          <>
            <Link className="link" to="/">
              My Cart
            </Link>
            <Link className="link" to="/">
              My Orders
            </Link>
            <button className="login-btn">LogOut</button>
          </>
        ) : (
          <>
            <Link className="link" to="/">
              My Products
            </Link>
            <Link className="link" to="/">
              Add Product
            </Link>
            <button className="login-btn">LogOut</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
