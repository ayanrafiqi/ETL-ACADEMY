import Swal from "sweetalert2";
import axios from "../utils/axios_client";

export const updateProfile = (model, cb) => {
  axios
    .put("/api/profile", model)
    .then(({ data }) => cb(data))
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getProfile = (cb) => {
  axios
    .get("/api/profile")
    .then(({ data }) => {
      data.cls = data.cls || "";
      data.department = data.department || "";
      data.contactNo = data.contactNo || "";
      data.address = data.address || "";
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const uploadDp = (file, setImagePath) => {
  const formData = new FormData();
  formData.append("file", file);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios
    .post("/api/uploadDp", formData, config)
    .then((response) => {
      Swal.fire("Profile updated successfully!");
      setImagePath(response.data);
    })
    .catch((error) => {
      Swal.fire(error.response.data);
    });
};
