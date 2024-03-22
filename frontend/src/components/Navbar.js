import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img className="logoimg" src="https://s3images.coroflot.com/user_files/individual_files/original_129988_ZhImrU3_6hRRVOFhhlrUBNfQc.jpg" alt='logo' /> 
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/addproducts">Add Products</Link>{" "}
          </li>
          <li>
            <Link to="/updateproducts">Update Products</Link>{" "}
          </li>
          <li>
            <Link to="/profile">Profile</Link>{" "}
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              LogOut ({JSON.parse(auth).name})
            </Link>{" "}
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
