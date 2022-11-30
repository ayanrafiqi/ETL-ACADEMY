import moment from "moment";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  deleteSearchHistory,
  getSearchHistory,
} from "../services/searchHistoryService";

const MySearchHistoryPage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    getSearchHistory(setData);
  };

  useEffect(getData, []);

  return (
    <div>
      <h2>Search History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Type</th>
            <th>Searched At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.keyword}</td>
                <td>{item.type}</td>
                <td>
                  {moment(item.searchedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>
                  <Button
                    onClick={() => {
                      deleteSearchHistory(item._id, getData);
                    }}
                  >
                    <DeleteOutlineIcon/>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MySearchHistoryPage;
