import './MainVideo.scss';
// import mainVideoData from '../../data/video-details.json';
// import '../../data/videos.json';

function MainVideo({mainVideo}) {
  return (
    <section className='main-video'>
      <div className='main-video__wrapper'>
        <video className='main-video__featured' alt="The Selected Video" poster={mainVideo.image} controls>
        </video>
      </div>
    </section>
  );
}

export default MainVideo;