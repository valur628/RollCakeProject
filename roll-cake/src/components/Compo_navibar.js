import React, { useEffect, useState } from "react";
import SearchBar from "./Nav_SearchBar";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            height="32"
            alt="logo"
            class="d-inline-block align-text-top"
          />
          롤케이크 프로젝트
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/hotdeal"
              >
                핫딜
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/Search"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
          </ul>
          <SearchBar />
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => {
                setSearchDeals(event.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
             <div className="dataResult">
              {DealData.map((value, key) => {
                return (
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    aria-current="page"
                    to="/Search"
                  ></Link>
                );
              })}
            </div>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
