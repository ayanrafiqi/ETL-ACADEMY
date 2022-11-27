import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function ProtectedNavBar() {
  const { logout, isAdmin } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <h1 class="logo me-auto">
              ETL ACADEMY
              <span
                style={{
                  textTransform: "lowercase",
                  color: "black",
                  fontSize: "medium",
                  fontWeight: "600",
                }}
              >
                
                Easy to learn
              </span>
             </h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Search Course
            </Nav.Link>
            <Nav.Link as={Link} to="/pinnedCourses">
              Playlist
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
