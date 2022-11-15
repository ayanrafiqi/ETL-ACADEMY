import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function PublicNavBar() {
  const { logout, isAdmin, isAuthenticated } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
           <h4 style={{fontFamily:"cursive" }}>ETL Academy </h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            
            {!isAuthenticated()?<>
            
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            </>:<>
            <Nav.Link as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/pinnedCourses">
              Pinned Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
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
            </>}
         </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PublicNavBar;
