import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Moment from "moment";
import { getSearchHistoryByUserId } from "../../services/searchHistoryService";

const UserSearchHistory = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSearchHistoryByUserId(id, setData);
  }, [id]);

  return (
    <div>
      <h2>Search History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Type</th>
            <th>Searched At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.keyword}</td>
                <td>{item.type}</td>
                <td>
                  {Moment(item.searchedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserSearchHistory;
