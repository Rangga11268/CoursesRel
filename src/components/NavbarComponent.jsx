import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand className="fs-3 fw-bold" href="#home">
          Darell.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((nav) => {
              return (
                <div className="nav-link" key={nav.id}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {nav.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">
              Join with us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
