import React from "react";
import './NavBar.css';
import movielogo from '../assets/movie logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Login from "../pages/LoginandSignup/Login";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark  p-3  navhead">
        <div className="container-fluid">
          <Link className="navbar-brand " to="Movie_Ticket_Booking/"><img src={movielogo} className="navlogo" alt="Logo" width="35px" height="auto" /> <span className="logoname">BL MOVIES</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2  navhome" aria-current="page" to="Movie_Ticket_Booking/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Movies
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Movie All</a></li>
                  <li><Link className="dropdown-item" to="Movie_Ticket_Booking/nowplaying">Movie Now Playing</Link></li>
                  <li><Link className="dropdown-item" to="Movie_Ticket_Booking/TopRated">Top Rated Movies</Link></li>
                  <li><Link className="dropdown-item" to="Movie_Ticket_Booking/upcoming">Upcoming Movies</Link></li>
                  <li><Link className="dropdown-item" to="Movie_Ticket_Booking/popular">Popular Movies</Link></li>
                  <li><a className="dropdown-item" href="#">Movie Details</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Event List</a></li>
                  <li><a className="dropdown-item" href="#">Event Details </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Our Faqs</a></li>
                  <li><a className="dropdown-item" href="#"> 404</a></li>
                  <li><a className="dropdown-item" href="#"> My Account</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  News
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">News</a></li>
                  <li><a className="dropdown-item" href="#">News Details</a></li>
                  <li><a className="dropdown-item" href="#">Contact us</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Contact</a>
              </li>
            </ul>
            
            <ul className="navbar-nav ms-auto d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a className="nav-link  navhead" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faUser} /> Login</a>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <Login />
                      <div className="modal-footer">
                        <button type="button" className="btn modelclosebtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>





              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;