import Swal from "sweetalert2";
import axios from "../utils/axios_client";

export const addSearchHistory = (model, cb) => {
  axios
    .post("/api/searchHistory", model)
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getSearchHistory = (cb) => {
  axios
    .get("/api/searchHistory")
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const deleteSearchHistory = (id, cb) => {
  axios
    .delete("/api/searchHistory/" + id)
    .then(() => {
      cb();
      Swal.fire("delete successfully");
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};


export const getSearchHistoryByUserId = (id, cb) => {
  axios
    .get("/api/searchHistoryByUserId/" + id)
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};
