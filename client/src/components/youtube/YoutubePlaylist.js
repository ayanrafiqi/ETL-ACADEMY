const YoutubePlaylist = ({ id, snippet }) => {
  const { title, thumbnails = {}, channelTitle, description } = snippet;
  const { medium } = thumbnails;
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
        <a
          href={"https://www.youtube.com/playlist?list=" + id.playlistId}
          target="_blank"
          className="text-decoration-none"
        >
          VIEW FULL PLAYLIST
        </a>
      </div>
    </div>
  );
};

export default YoutubePlaylist;
