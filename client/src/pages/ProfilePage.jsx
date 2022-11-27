import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";
import {
  getProfile,
  updateProfile,
  uploadDp,
} from "../services/profileService";
import { generateImagePath } from "../utils/utils";
import "../css/profile-style.css";

const ProfilePage = () => {
  const [data, setData] = useState({
    cls: "",
    department: "",
    contactNo: "",
    name: "",
    address: "",
    user: { email: "" },
  });
  useEffect(() => {
    getProfile(setData);
  }, []);

  const inputRef = useRef(null);
  return (
    <div>
      <h2 className="text-center mx-2">Profile</h2>

      <div>
        <Image
          className="img"
          roundedCircle={true}
          src={generateImagePath(data.dpPath)}
        />
        <div>
          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              uploadDp(file, (path) => {
                setData({ ...data, dpPath: path });
              });
            }}
          />
          <Button
            style={{ position: "absolute", left: "27%" }}
            variant="primary"
            type="submit"
            className="mt-2"
            onClick={() => inputRef.current.click()}
          >
            Change
          </Button>
        </div>
      </div>

      <Form
        className="profile"
        onSubmit={(e) => {
          e.preventDefault();
          updateProfile(data, () => {
            Swal.fire("saved successfully");
          });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Email"
            value={data.user.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Name"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Department"
            value={data.department}
            onChange={(e) => {
              setData({ ...data, department: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Class"
            value={data.cls}
            onChange={(e) => {
              setData({ ...data, cls: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Contact No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contact No"
            value={data.contactNo}
            onChange={(e) => {
              setData({ ...data, contactNo: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={(e) => {
              setData({ ...data, address: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ProfilePage;
