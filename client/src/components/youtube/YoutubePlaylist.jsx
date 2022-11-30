import { Link } from "react-router-dom";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import { pinCourse } from "../../services/pinnedCoursesService";

const YoutubePlaylist = ({ id, snippet, showPin }) => {
  const { title, thumbnails = {}, channelTitle, description } = snippet;
  const { medium } = thumbnails;
  const emptyUrl = "";
  return (
    <div className="mb-3 row">
      <div className="col-md-4">
        <img
          width={medium.width}
          height={medium.height}
          src={medium.url}
          alt=""
        />
      </div>
      <div className="col-md-8">
        <h4>{title}</h4>
        <h6>{channelTitle}</h6>
        <p className="text-truncate">{description}</p>
        <Link to={"/courseDetails/" + id} className="text-decoration-none">
        <FullscreenExitRoundedIcon/>VIEW FULL PLAYLIST
        </Link>
        {showPin && (
          <div>
            <a href= {emptyUrl}
              className="text-decoration-none" 
              onClick={(e) => {
                e.preventDefault()
                pinCourse({ courseId: id }, () => {});
              }}
            >
            <PlaylistAddIcon/> Pin Course
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubePlaylist;
