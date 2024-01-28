import "./VideoDetails.scss";
import formatDate from "../../utils/dateUtils";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function VideoDetails({videoId, apiKey, baseUrl, videoList }) {
  console.log("video id inside details: ", videoId);
  const [mainVideo, setMainVideo] = useState({});

  const fetchMainVideo = async () => {
    try {
      let response;
      if(videoId){
          response = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
    }
      else{
        const defaultVideoId = videoList[0].id;
        response = await axios.get(
          `${baseUrl}/videos/${defaultVideoId}?api_key=${apiKey}`
        );
      }

      if(response){
        setMainVideo(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMainVideo();
  }, [videoId]);

  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  } = mainVideo;

  return (
    <section className="information">
      <section className="info">
        <section className="info__wrapper">
          <div className="info__content">
            <div className="info__title-wrapper">
              <h1 className="info__title">{title}</h1>
            </div>

            <div className="info__details-wrapper">
              <div className="info__details info__details-first">
                <div className="info__channel-wrapper">
                  <h3 className="info__channel">By {channel}</h3>
                </div>

                <div className="info__date-wrapper">
                  <p className="info__date">{formatDate(timestamp)}</p>
                </div>
              </div>

              <div className="info__details info_details-second">
                <div className="info__details-content info__views-wrapper">
                  <div className="info__icon-wrapper info__views-icon">
                    <img className="info__icon" src={viewsIcon} alt="views" />
                  </div>
                  <div className="info__details-txt info__views-txt">
                    <p className="info__views">{views}</p>
                  </div>
                </div>

                <div className="info__details-content info__likes-wrapper">
                  <div className="info__icon-wrapper info__likes-icon">
                    <img className="info__icon" src={likesIcon} alt="likes" />
                  </div>
                  <div className="info__details-txt info__likes-txt">
                    <p className="info__likes">{likes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="description">
            <div className="description__content">
              <p>{description}</p>
            </div>
          </section>
        </section>
      </section>

      <section className="comments">
        <div className="comments__container">
          {comments && comments.length > 0 && (
            <h3 className="comments__count">{comments.length} Comments</h3>
          )}
          <div className="form__wrapper">
            <form className="form" id="comment-form">
              <div className="form__avatar">
                <img
                  className="form__avatar-img"
                  src={avatar}
                  alt="Mohan-muruge image"
                />
              </div>
              <div className="form__new-comment">
                <label className="comments__header">
                  Join the Conversation
                </label>
                <div className="form__right">
                  <div className="form__new-comment-container">
                    <div className="form__section">
                      <textarea
                        className="form__field form__comment"
                        id="userComment"
                        name="userComment"
                        placeholder="Add a new comment"
                        cols="30"
                        rows="3"
                        minLength="1"
                        maxLength="300"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form__button-wrapper">
                    <img
                      className="form__button-icon"
                      src={addCommentIcon}
                      alt="add"
                    />
                    <button className="form__button" type="submit">
                      COMMENT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <section className="comments__display">
            <ul className="comments__list">
              {comments && comments.map((comment) => {
                return (
                  <div key={comment.id}   >
                    <li className="comment">
                      <div className="comment__avatar-wrapper">
                        <div className="comment__avatar"></div>
                      </div>
                      <div className="comment__content">
                        <div className="comment__head">
                          <p className="comment__author">{comment.name}</p>
                          <div className="comment__head-right">
                            <p className="comment__date">
                              {formatDate(comment.timestamp)}
                            </p>
                          </div>
                        </div>
                        <div className="comment__text">
                          <p className="comment__par">{comment.comment}</p>
                        </div>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </section>
        </div>
      </section>
    </section>
  );
}

export default VideoDetails;
