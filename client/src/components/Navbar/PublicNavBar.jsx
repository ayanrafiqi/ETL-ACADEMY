import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "../../css/navbar-style.css";


const header={
  fontFamily: "Bona Nova, serif",
  fontFamily: "PT Sans, sans-serif",
  fontSize:"33px"
}
function PublicNavBar() {
  const { logout, isAdmin, isAuthenticated } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container >
          <Navbar.Brand as={Link} to="/">
            <h1 class="logo me-auto" style={header} >
              ETL ACADEMY
              {/* <span
                style={{
                  textTransform: "lowercase",
                  color: "black",
                  fontSize: "medium",
                  fontWeight: "600",
                }}
              >
                {" "}
                Easy to learn
              </span>{" "} */}
            </h1>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {!isAuthenticated() ? (
              <>
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/courses">
                  Search Course
                </Nav.Link>
                <Nav.Link as={Link} to="/pinnedCourses">
                  Playlist
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/myfeedback">
                  Feedback
                </Nav.Link>
                <Nav.Link onClick={logout}>Log out<LogoutRoundedIcon/></Nav.Link>
                {isAdmin() && (
                  <Nav.Link as={Link} to="/users">
                    Admin Panel
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PublicNavBar;
