import React, { useState } from "react";
import SearchBar from "./Nav_SearchBar";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            height="32"
            alt="logo"
            class="d-inline-block align-text-top"
            // 뭔가 사진 크기가 아쉬움.  navabar의 패딩을 줄여야겠음
          />
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
          </ul>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";

// import SearchBar from "./Nav_SearchBar";
// import { Link } from "react-router-dom";
// import logo from "../logo.png";

// const Navigation = () => {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get("s");
//   const [searchQuery, setSearchQuery] = useState(query || "");

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         fixed="top"
//         expand="sm"
//         bg="#e74333"
//         variant="dark"
//       >
//         <Container>
//           <Navbar.Brand to="/">
//             <img
//               src={logo}
//               height="32"
//               alt="logo"
//               className="d-inline-block align-text-top"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-navbar-nav">
//             <Nav className="me-auto">
//               <Link to="/hotdeal">핫딜</Link>
//             </Nav>
//             <Nav>
//               <SearchBar
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//               />
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Navigation;

// // 출처
// // https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6
// // https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
