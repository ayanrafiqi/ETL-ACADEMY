import { useState } from "react";
import { useEffect } from "react";
import YoutubePlaylist from "../components/youtube/YoutubePlaylist";
import { getPinnedCourses } from "../services/pinnedCoursesService";
import { getPlaylists } from "../utils/youtube-search";

//import Button from "react-bootstrap/Button";

const PinnedCoursesPage = () => {
  const [data, setData] = useState({ items: [] });
  useEffect(() => {
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
  }, []);
  return (
    <div>
      <h2>My Playlist</h2>
      {data.items && (
        <div>
          {data.items.map(({ id, snippet = {} }) => (
            <YoutubePlaylist snippet={snippet} id={id} key={id} />
            
          ))
          }

        </div>
      )}
    </div>
  );
};

export default PinnedCoursesPage;
