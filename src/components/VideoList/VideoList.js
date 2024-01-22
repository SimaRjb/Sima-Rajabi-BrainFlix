import "./VideoList.scss";
// import mainVideoData from '../../data/video-details.json';
// import '../../data/videos.json';

function VideoList({ videoListData, mainVideo, alterVideo }) {
  return (
    <section className="videos">
      <div className="videos__wrapper">
        <ul className="videos__list">
          <li></li>
          <li></li>


          {videoListData.map((video) => {
            return (
              video.id !== mainVideo.id &&
              <li
                key={video.id}
                onClick={() => {
                  console.log(video);
                  alterVideo(video.id);
                }}
              >
                {video.title}
                {video.channel}
                <img className="video__img" src={video.image} alt="poster" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default VideoList;
