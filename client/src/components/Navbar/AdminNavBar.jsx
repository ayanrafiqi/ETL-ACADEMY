import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function AdminNavBar() {
  const { logout } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ETL Academy
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/allfeedbacks">
              Feedbacks
            </Nav.Link>
            <Nav.Link onClick={logout}>Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavBar;
