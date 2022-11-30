import Swal from "sweetalert2";
import axios from "../utils/axios_client";


export const pinCourse = (model, cb) => {
  axios
    .post("/api/pinnedCourses", model)
    .then(({ data }) => {
      Swal.fire("Course pinned successfully");
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getRecommendedCourses = (cb) => {
  axios
    .get("/api/recommendedCourses")
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const deletePinnedCourses = (courseId, cb) => {
 // console.log(id);
  axios
    .delete("/api/pinnedCourses/" + courseId)
    .then(() => {
      cb();
      Swal.fire(" Playlist Removed Successfully");
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};


export const getPinnedCourses = (cb) => {
  axios
    .get("/api/pinnedCourses")
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};

export const getPinnedCoursesByUserId = (id, cb) => {
  axios
    .get("/api/pinnedCoursesByUserId/" + id)
    .then(({ data }) => {
      cb(data);
    })
    .catch((err) => {
      Swal.fire(err.response.data);
    });
};
