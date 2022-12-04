import { useState } from "react";
import { useEffect } from "react";
import YoutubePlaylist from "../components/youtube/YoutubePlaylist";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import {
  deletePinnedCourses,
  getPinnedCourses,
} from "../services/pinnedCoursesService";
import { getPlaylists } from "../utils/youtube-search";

import Button from "react-bootstrap/Button";

const PinnedCoursesPage = () => {
  const [data, setData] = useState({ items: [] });


  const getData = () => {
    getPinnedCourses((data) => {
      if (data.length > 0) {
        getPlaylists(
          data.map((x) => x.courseId),
          (res) => {
            setData(res);
          }
        );
      }
    });
  };
  useEffect(getData,[]);

  return (
    <div>
      <h2>My Playlist</h2>
      {data.items && (
        <div>
          {data.items.map(({ id, snippet = {} }) => (
            <>
              <Button
                style={{
                  position: "absolute",
                  left: "1150px",
                
                }}
                onClick={() => {
                  deletePinnedCourses(id,getData);
                }}
              >
                <DeleteOutlineRoundedIcon/>
              </Button>
              <YoutubePlaylist snippet={snippet} id={id} key={id} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default PinnedCoursesPage;
