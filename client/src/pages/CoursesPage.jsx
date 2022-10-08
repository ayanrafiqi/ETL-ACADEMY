import { useState } from "react";
import YoutubePlaylist from "../components/youtube/YoutubePlaylist";
import YoutubeVideo from "../components/youtube/YoutubeVideo";
import { addSearchHistory } from "../services/searchHistoryService";
import YTSearch from "../utils/youtube-search";
const CoursesPage = () => {
  console.log(process.env);
  const apiKey = process.env.REACT_APP_YOUTUBE_KEY;

  const [keyword, setKeyword] = useState("");
  const [videoIds, setVideoIds] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [searched, setSearched] = useState(false);
  const [type, setType] = useState("video");

  const videoSearch = () => {
    YTSearch({ key: apiKey, term: keyword, type }, (videos) => {
      if (type === "video") setVideoIds(videos.map((x) => x.id.videoId));
      else setPlayList(videos);
      setSearched(true);
    });

    addSearchHistory({ keyword, type }, () => {});
  };

  const onType = (e) => {
    setType(e.target.value);
    setPlayList([]);
    setVideoIds([]);
  };

  return (
    <div>
      <h2 className="text-center mt-3">Search Videos</h2>
      <div className="row offset-md-3 col-md-6 mt-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <select value={type} onChange={onType} className="form-control">
            <option value="video"> Video</option>
            <option value="playlist"> Playlist</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={videoSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-5">
        {searched && <h3>Search Result</h3>}
        {type === "video" ? (
          <div className="row">
            {videoIds.map((videoId) => {
              return (
                <div className="col-md-6" key={videoId}>
                  <YoutubeVideo videoId={videoId} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {playList.map(({ id, snippet = {} }) => (
              <YoutubePlaylist
                showPin={true}
                snippet={snippet}
                id={id.playlistId}
                key={id.playlistId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
