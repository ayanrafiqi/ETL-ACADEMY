import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function ProtectedNavBar() {
  const { logout, isAdmin } = useAuth();
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
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/pinnedCourses">
              PlayLists
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/mySearchHistory">
              Search History
            </Nav.Link>
            <Nav.Link as={Link} to="/myfeedback">
              Feedback
            </Nav.Link>
            <Nav.Link onClick={logout}>Log out</Nav.Link>
            {isAdmin() && (
              <Nav.Link as={Link} to="/users">
                Admin Panel
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ProtectedNavBar;
