import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import YoutubeVideo from "../components/youtube/YoutubeVideo";
import { getPlaylistItems } from "../utils/youtube-search";

const CourseDetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState({ items: [] });

  const getItems = (pageToken) => {
    getPlaylistItems(
      params.id,
      (res) => {
        setData(res);
      },
      pageToken
    );
  };

  useEffect(getItems, []);

  return (
    <div>
      <h2>Course Details</h2>
      <div className="row">
        {data.items.map((item) => {
          return (
            <div className="col-md-6" key={item.contentDetails.videoId}>
              <YoutubeVideo videoId={item.contentDetails.videoId} />
            </div>
          );
        })}
      </div>
      <div className="row">
        {data.prevPageToken && (
          <div className="col-md-3">
            <Button
              onClick={() => {
                getItems(data.prevPageToken);
              }}
            >
              Previous
            </Button>
          </div>
        )}

        {data.nextPageToken && (
          <div className="col-md-3">
            <Button
              className="ml-5"
              onClick={() => {
                getItems(data.nextPageToken);
              }}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsPage;
