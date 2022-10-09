import { useEffect, useState } from "react";
import { getUserDetails } from "../../services/profileService";
import { generateImagePath } from "../../utils/utils";
import "../../css/profile-style.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { changeUserStatus } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

const UserDetails = ({ id }) => {
  const { user } = useAuth();
  const fetchUser = () => {
    getUserDetails(id, setData);
  };
  const [data, setData] = useState();
  useEffect(fetchUser, []);
  return (
    <div>
      <h2>User Details</h2>
      {data && (
        <div>
          <div>
            <Image
              className="img"
              roundedCircle={true}
              src={generateImagePath(data.dpPath)}
            />
          </div>
          <div className="row mt-3">
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Email: </div>
              <div className="col-md-8 lbl-val">{data.email}</div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Name: </div>
              <div className="col-md-8 lbl-val">{data.name}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Username: </div>
              <div className="col-md-8 lbl-val">{data.username}</div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Role: </div>
              <div className="col-md-8 lbl-val">{data.role}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Status: </div>
              <div className="col-md-8 lbl-val">{data.status}</div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Class: </div>
              <div className="col-md-8 lbl-val">{data.cls}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Department: </div>
              <div className="col-md-8 lbl-val">{data.department}</div>
            </div>
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Address: </div>
              <div className="col-md-8 lbl-val">{data.address}</div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 row">
              <div className="col-md-4 lbl">Contact No: </div>
              <div className="col-md-8 lbl-val">{data.contactNo}</div>
            </div>
            <div className="col-md-6 text-center">
              {user.id != id &&
                (data.status == "Blocked" ? (
                  <Button
                    onClick={() => {
                      changeUserStatus(
                        {
                          userId: id,
                          status: "Active",
                        },
                        fetchUser
                      );
                    }}
                  >
                    Unblock
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      changeUserStatus(
                        {
                          userId: id,
                          status: "Blocked",
                        },
                        fetchUser
                      );
                    }}
                  >
                    Block
                  </Button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
