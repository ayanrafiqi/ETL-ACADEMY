import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getAllFeedbacks } from "../services/feedbackService";
import Moment from "moment";
import { Link } from "react-router-dom";

const AllFeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    getAllFeedbacks(setFeedbacks);
  }, []);
  console.log(feedbacks);
  return (
    <div>
      <h2>Feedbacks</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Remarks</th>
            <th>Added at</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <Link to={"/userDetails/" + item.user._id}>
                    {item.user.email}
                  </Link>
                </td>
                <td>{item.remarks}</td>
                <td>
                  {Moment(item.createdDate).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.points}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllFeedbacksPage;
