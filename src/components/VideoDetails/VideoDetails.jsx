import "./VideoDetails.scss";
import formatDate from "../../utils/dateUtils";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import deleteCommentIcon from "../../assets/icons/del.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VideoDetails({ videoId, apiKey, baseUrl, videoList }) {
  const [mainVideo, setMainVideo] = useState({});

  const [videoComment, setVideoComment] = useState("");
  const [isCommentValid, setIsCommentvalid] = useState(false);
  const [isCommentTouched, setIsCommentTouched] = useState(false);

  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [commentUpdateFlag, setCommentUpdateFlag] = useState(0);

  const [likeActionStatus, setLikeActionStatus] =useState(true)

  const handleLikes = () => {
    modifyLikes();
  };

  const modifyLikes = async () => {
    try {
      let res;
      let defaultVideoId = videoId;
      if (!defaultVideoId) {
        defaultVideoId = videoList[0].id;
      }
      res = await axios.put(
        `${baseUrl}/videos/${defaultVideoId}/likes?api_key=abc`, { likeAction: likeActionStatus ? "add" : "remove" }
      );
      setLikeActionStatus((prevStatus) => !prevStatus);
      console.log("likes: ", res.data);
      setCommentUpdateFlag((prevFlag) => prevFlag + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId);
  };

  const deleteComment = async (commentId) => {
    try {
      let defaultVideoId = videoId;
      if (!defaultVideoId) {
        defaultVideoId = videoList[0].id;
      }
      const res = await axios.delete(
        `${baseUrl}/videos/${defaultVideoId}/comments/${commentId}?api_key=abc`
      );
      setCommentUpdateFlag((prevFlag) => prevFlag + 1);
    } catch (error) {
      console.error(error);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (isCommentValid) {
      postComment();
      setVideoComment("");
    }
  };

  const handleChangeComment = (event) => {
    const value = event.target.value;
    setVideoComment(value);
    setIsCommentvalid(value.length > 5);
    setIsCommentTouched(true);
  };

  const postComment = async () => {
    try {
      let defaultVideoId = videoId;
      if (!defaultVideoId) {
        defaultVideoId = videoList[0].id;
      }
      const res = await axios.post(
        `${baseUrl}/videos/${defaultVideoId}/comments/?api_key=abc`,
        {
          name: "test user",
          comment: videoComment,
        }
      );
      setCommentUpdateFlag((prevFlag) => prevFlag + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMainVideo = async () => {
    try {
      let response;
      if (videoId) {
        response = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
      } else {
        const defaultVideoId = videoList[0].id;
        response = await axios.get(
          `${baseUrl}/videos/${defaultVideoId}?api_key=${apiKey}`
        );
      }

      if (response) {
        setMainVideo(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMainVideo();
  }, [videoId, commentUpdateFlag]);

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
                  <Link to="#" className="info__icon-wrapper info__likes-icon">
                    <img
                      className={`info__icon ${!likeActionStatus ? "info__icon-liked" :"info__icon-not-liked"}`}
                      src={likesIcon}
                      alt="likes"
                      onClick={handleLikes}
                    />
                  </Link>
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
            <form onSubmit={submitHandler} className="form" id="comment-form">
              <div className="form__avatar">
                <img
                  className="form__avatar-img"
                  src={avatar}
                  alt="Mohan-muruge image"
                />
              </div>
              <div className="form__new-comment">
                <label className="comments__header">
                  Join the Conversation{" "}
                  {isCommentTouched && !isCommentValid && (
                    <span className="label-error">
                      {" "}
                      (Must be longer than 5 characters)
                    </span>
                  )}
                </label>
                <div className="form__right">
                  <div className="form__new-comment-container">
                    <div className="form__section">
                      <textarea
                        className={`form__field form__comment ${
                          isCommentTouched && !isCommentValid && "input-invalid"
                        }`}
                        id="userComment"
                        name="userComment"
                        placeholder="Add a new comment"
                        cols="30"
                        rows="3"
                        minLength="1"
                        maxLength="300"
                        required
                        onChange={handleChangeComment}
                        value={videoComment}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form__button-wrapper">
                    <img
                      className="form__button-icon"
                      src={addCommentIcon}
                      alt="add"
                    />
                    <button
                      className="form__button"
                      type="submit"
                      disabled={!isCommentValid}
                    >
                      COMMENT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <section className="comments__display">
            <ul className="comments__list">
              {comments &&
                comments.map((comment) => {
                  return (
                    <div key={comment.id}>
                      <li className="comment">
                        <div className="comment__avatar-wrapper">
                          <div className="comment__avatar"></div>
                        </div>
                        <div className="comment__content">
                          <div className="comment__head">
                            <p className="comment__author">{comment.name}</p>
                            <div className="comment__head-right">
                              <p className="comment__date">
                                <div>{formatDate(comment.timestamp)}</div>
                                <div>
                                  <Link
                                    to="#"
                                    onClick={() =>
                                      handleDeleteComment(comment.id)
                                    }
                                  >
                                    <img
                                      className="comment__delete-icon"
                                      src={deleteCommentIcon}
                                      alt="add"
                                    />
                                  </Link>
                                </div>
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
