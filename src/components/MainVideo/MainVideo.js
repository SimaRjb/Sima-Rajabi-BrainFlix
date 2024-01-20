import './MainVideo.scss';
import avatar from "../../assets/images/Mohan-muruge.jpg";

function MainVideo() {
  return (
    <section className='main-video'>
        <div className='main-video__wrapper'>
            <video className='main-video__featured' poster={avatar} controls>

            </video>
        </div>
    </section>
  );
}

export default MainVideo;
