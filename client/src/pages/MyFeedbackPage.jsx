import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import {
  getMyFeedbacks,
  getRatings,
  updateRatings,
} from "../services/feedbackService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Moment from "moment";

const MyFeedbackPage = () => {
  const [model, setModel] = useState({
    points: 0,
    remarks: "",
  });

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getRatings(setModel);
    setFB();
  }, []);

  const setFB = () => {
    getMyFeedbacks(setFeedbacks);
  };

  return (
    <div>
      <div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateRatings(model, () => {
              setModel({ ...model, remarks: "" });
              setFB();
            });
          }}
        >
          <Form.Group className="mb-3" controlId="star">
            <Form.Label>Add or update the ratings</Form.Label>
            <StarRatings
              rating={model.points}
              starRatedColor="blue"
              changeRating={(val) => {
                setModel({ ...model, points: val });
              }}
              numberOfStars={5}
              name="rating"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              type="email"
              as="textarea"
              rows={3}
              required
              placeholder="Enter Remarks"
              value={model.remarks}
              onChange={(e) => {
                setModel({ ...model, remarks: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="mt-3">
        <h3 className="text-center">Previous Feedbacks</h3>
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

export default MyFeedbackPage;
