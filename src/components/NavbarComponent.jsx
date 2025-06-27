import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="fs-3 fw-bold" href="#home">Darell.</Navbar.Brand>
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
            <button className="btn btn-outline-danger rounded-1">Join with us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
