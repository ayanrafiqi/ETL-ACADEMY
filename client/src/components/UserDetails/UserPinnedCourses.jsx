import { useState } from "react";
import { useEffect } from "react";
import YoutubePlaylist from "../youtube/YoutubePlaylist";
import { getPinnedCoursesByUserId } from "../../services/pinnedCoursesService";
import { getPlaylists } from "../../utils/youtube-search";

const UserPinnedCourses = ({ id }) => {
  const [data, setData] = useState({ items: [] });
  useEffect(() => {
    getPinnedCoursesByUserId(id, (data) => {
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
      <h2>Pinned Courses</h2>
      {data.items && (
        <div>
          {data.items.map(({ id, snippet = {} }) => (
            <YoutubePlaylist snippet={snippet} id={id} key={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPinnedCourses;
