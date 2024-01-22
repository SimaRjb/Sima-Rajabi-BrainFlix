import "./VideoList.scss";

function VideoList({ videoListData, mainVideo, alterVideo }) {
  return (
    <section className="videos">
      <div className="videos__wrapper">
        <div className="videos__header-wrapper">
          <h3 className="videos__header">NEXT VIDEOS</h3>
        </div>
        <ul className="videos__list">
          {videoListData.map((video) => {
            return (
              video.id !== mainVideo.id && (
                <li
                  key={video.id}
                  onClick={() => {
                    console.log(video);
                    alterVideo(video.id);
                  }}
                >
                  <div className="video__wrapper">
                    <div className="video__img-wrapper">
                      <img
                        className="video__img"
                        src={video.image}
                        alt="poster"
                      />
                    </div>

                    <div className="video__wrapper-right">
                      <div className="video__title-wrapper">
                        <h3 className="video__title">{video.title}</h3>
                      </div>

                      <div className="video__channel-wrapper">
                        <p className="video__channel">{video.channel}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default VideoList;
