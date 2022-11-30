import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
import { Link } from "react-router-dom";
import { changeUserStatus, getUsers } from "../services/authService";
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';

const UsersPage = () => {
  const fetchUsers = () => {
    getUsers(setUsers);
  };
  const [users, setUsers] = useState([]);
  useEffect(fetchUsers, []);

  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Status</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.status}</td>
                <td>{item.role}</td>
                <td>
                  <Link className="m-2" to={"/userDetails/" + item._id}>
                    Details
                  </Link>

                  {item.status == "Blocked" ? (
                    <Button
                      onClick={() => {
                        changeUserStatus(
                          {
                            userId: item._id,
                            status: "Active",
                          },
                          fetchUsers
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
                            userId: item._id,
                            status: "Blocked",
                          },
                          fetchUsers
                        );
                      }}
                    >
                      Block <BlockRoundedIcon/> 
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersPage;
