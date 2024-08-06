import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [account, setAccount] = useState("login");
   
    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food-logo" />

        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
            className="account"
            onClick={() =>
              account === "login" ? setAccount("logout") : setAccount("login")
            }
          >
            {account}
          </button>

          </ul>
        </div>
      </div>
    );
  };

  export default Header;