import axios from "../utils/axios_client";
import { setUserDetails } from "../utils/utils";
import Swal from "sweetalert2";

export const login = (model, cb) => {
  axios
    .post("/api/login", model)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const signup = (model, cb) => {
  axios
    .post("/api/register", model)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};
