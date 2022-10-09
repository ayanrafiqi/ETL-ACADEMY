import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import {
  getFeedbacksByUserId,
  getRatingsByUserId,
} from "../../services/feedbackService";
import Moment from "moment";
import Table from "react-bootstrap/Table";

const UserFeedback = ({ id }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [ratings, setRatings] = useState();
  useEffect(() => {
    getRatingsByUserId(id, setRatings);
    setFB();
  }, [id]);

  const setFB = () => {
    getFeedbacksByUserId(id, setFeedbacks);
  };

  return (
    <div>
      <div>
        {ratings && (
          <StarRatings
            rating={ratings.points}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-center">Feedbacks</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Remarks</th>
              <th>Created at</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((item) => {
              return (
                <tr key={item._id}>
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
    </div>
  );
};

export default UserFeedback;
