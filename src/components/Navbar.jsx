import { Logout } from "@mui/icons-material";
import { Avatar, Badge, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bag from "../assets/bag.png";
import { clientContext } from "../context/ClientContext";

const Navbar = () => {
  const data = React.useContext(clientContext);
  const { authWidthGoogle, user, logOut, cartCount } = data;
  return (
    <div>
      <div className="navbar-navt">
        <div className="navbar-left">
          <ul className="navbar-list">
            <Link to="/">
              <img
                src="https://www.istore.kg/static/_image/istore_logo.png"
                alt=""
              />
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/admin-panel/add">
              <li>Add Product</li>
            </Link>
            <Link to="/admin-panel">
              <li>Admin Panel</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <Badge badgeContent={cartCount} color="error">
              <img style={{ marginRight: 5 }} src={bag} alt="" />
            </Badge>
          </Link>
          {user ? (
            <>
              <Avatar src={user.photoURL} alt={user.displayName} />
              <span style={{ width: 100, color: "white", marginLeft: 10 }}>
                {user.email}
              </span>
              <Button style={{ marginLeft: 70 }} onClick={logOut}>
                <Logout color="error" />
              </Button>
            </>
          ) : (
            <Button onClick={authWidthGoogle} variant="outlined" color="error">
              Войти
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
