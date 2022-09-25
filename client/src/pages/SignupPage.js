import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../contexts/AuthContext";
import { signup } from "../services/authService";

const SignupPage = () => {
  const [model, setModel] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
  });

  const auth = useAuth();

  return (
    <div>
      <h2 className="text-center mx-2">Sign up</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          signup(model, auth.login);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
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

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Name"
            value={model.name}
            onChange={(e) => {
              setModel({ ...model, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Username"
            value={model.username}
            onChange={(e) => {
              setModel({ ...model, username: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Password"
            value={model.password}
            onChange={(e) => {
              setModel({ ...model, password: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
