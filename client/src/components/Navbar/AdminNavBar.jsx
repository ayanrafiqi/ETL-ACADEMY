import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function AdminNavBar() {
  const { logout } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container >
          <Navbar.Brand as={Link} to="/">
          <h1 class="logo me-auto">
              ETL ACADEMY 
              {/* <span
                style={{
                  textTransform: "lowercase",
                  color: "black",
                  fontSize: "medium",
                  fontWeight: "600",
                  marginRight:"50px",
                  marginLeft:"5px"
                }}
              >
                
                Easy to learn
              </span> */}
             </h1>
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
            <Nav.Link onClick={logout}>Log out<LogoutRoundedIcon/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavBar;
