import "../css/login-style.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../services/authService";



const LoginPage = () => {
  const [model, setModel] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  return (
    <div className="container">
   
      <Form className="form" 
        onSubmit={(e) => {
          e.preventDefault();
          login(model, auth.login);
        }}
      >
       <h4 className="text-center mx-2" style={{marginTop:"5px" ,fontFamily:"serif", fontWeight:"bold"}}>Please login to continue</h4>
        <Form.Group className="email" controlId="formBasicEmail">
          <Form.Label style={{marginTop:"30px"}}>Email address</Form.Label>
          <Form.Control
            type="email"
            className="email"
            required
            placeholder="Enter email"
            value={model.email}
            onChange={(e) => {
              setModel({ ...model, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="password"
            type="password"
            required
            placeholder="Password"
            value={model.password}
            onChange={(e) => {
              setModel({ ...model, password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button className="button" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
