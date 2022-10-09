import Swal from "sweetalert2";
import axios from "../utils/axios_client";

export const updateRatings = (model, cb) => {
  axios
    .put("/api/ratings", model)
    .then(({ data }) => {
      Swal.fire("Feedback added successfully");
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getRatings = (cb) => {
  axios
    .get("/api/myRatings")
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getRatingsByUserId = (id, cb) => {
  axios
    .get("/api/ratingsByUserId/" + id)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const addFeedback = (model, cb) => {
  axios
    .put("/api/feedback", model)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getMyFeedbacks = (cb) => {
  axios
    .get("/api/myFeedbacks")
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getAllFeedbacks = (cb) => {
  axios
    .get("/api/allFeedbacks")
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getFeedbacksByUserId = (id, cb) => {
  axios
    .get("/api/feedbacksByUserId/" + id)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};
