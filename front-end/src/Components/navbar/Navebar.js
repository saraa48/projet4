import React, { Component } from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";
class Navebar extends Component {
  render() {
    return (
      <div className="nav-menu">
        <span>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/18/a8/59/5a/urban-foods.jpg" alt=""
            className="logo"
          />
        </span>
        <nav>
          <ul>
            <li>
              <div className="input-btn">
                <span>
                  <input
                    type="text"
                    
                    placeholder="Search for your favorite restau"
                    className="input"
                    onChange={(e)=>{this.props.changeName(e.target.value)}}
                  />
                </span>
              </div>
            </li>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <Link to="/galery">
            <li>
              <a href="#">Galery</a>
            </li>
            </Link>
            <li className="drop">
              <a href="#home" className="dropbtn">
                Dropdown
              </a>
              <div class="dropdown-content">
                <a href="#">Restaurants</a>
                <a href="#">Reservation</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navebar;
