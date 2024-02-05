import "./VideoUpload.scss";
import formImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import axios from "axios";

function VideoUpload(props) {
  const apiKey = props.apiKey;
  const {REACT_APP_API_BASE_PATH} = process.env;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);

  const handleChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
    setIsTitleValid(value.length > 4); 
    setIsTitleTouched(true);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    setIsDescriptionValid(value.length > 10); 
    setIsDescriptionTouched(true);
  };

  const postVideo = async () => {
    try {
      const res = await axios.post(`${REACT_APP_API_BASE_PATH}/videos?api_key=${apiKey}`, {
        title: title,
        description: description,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (isTitleValid && isDescriptionValid) {
      postVideo();
      setTitle("");
      setDescription("");
      
      setIsTitleValid(false);
      setIsTitleTouched(false);

      setIsDescriptionValid(false);
      setIsDescriptionTouched(false);

      alert("The video is submitted successfully")
    }
  };

  return (
    <main>
      <section className="upload-wrapper">
        <div className="upload">
          <div className="upload__content">
            <div className="upload__title-wrapper">
              <div className="upload__title-content">
                <h1 className="upload__title">Upload Video</h1>
              </div>
            </div>

            <section className="form-upload-wrapper">
              <div className="form-upload-container">
                <form onSubmit={submitHandler} className="form-upload">
                  <div className="form-upload__content">
                    <div className="form-upload__left">
                      <div className="form-upload__label-wrapper">
                        <label className="form-upload__label">
                          {" "}
                          VIDEO THUMBNAIL
                        </label>
                      </div>
                      <div className="form-upload__img-wrapper">
                        <img
                          className="form-upload__img"
                          src={formImg}
                          alt="preview"
                        />
                      </div>
                    </div>

                    <div className="form-upload__right">
                      <div className="form-upload__title-wrapper">
                        <div className="form-upload__label-wrapper">
                          <label className="form-upload__label">
                            {" "}
                            ADD A VIDEO TITLE{" "}
                            {isTitleTouched && !isTitleValid && (
                              <span className="label-error">
                                {" "}
                                (Must be longer than 4 characters)
                              </span>
                            )}
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <input
                            className={`form-upload__input form-upload__title ${
                              isTitleTouched && !isTitleValid && "input-invalid"
                            }`}
                            type="text"
                            placeholder="Add a title to your video"
                            name="title"
                            onChange={handleChangeTitle}
                            value={title}
                          />
                        </div>
                      </div>

                      <div className="form-upload__description-wrapper">
                        <div className="form-upload__label-wrapper">
                          <label className="form-upload__label">
                            {" "}
                            ADD A VIDEO DESCRIPTION{" "}
                            {isDescriptionTouched && !isDescriptionValid && (
                              <span className="label-error">
                                {" "}
                                (Must be longer than 10 characters)
                              </span>
                            )}
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <textarea
                            className={`form-upload__input form-upload__description ${
                              isDescriptionTouched &&
                              !isDescriptionValid &&
                              "input-invalid"
                            }`}
                            type="text"
                            placeholder="Add a description to your video"
                            rows={3}
                            name="description"
                            onChange={handleDescriptionChange}
                            value={description}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-upload__btn-wrapper">
                    <div className="form-upload__btn-cancel-wrapper form-upload__btn-container">
                      <button className="form-upload__btn form-upload__btn-cancel">
                        CANCEL
                      </button>
                    </div>
                    <div className="form-upload__btn-publish-wrapper form-upload__btn-container">
                      <img
                        className="form-upload__btn-icon"
                        src={publishIcon}
                      />
                      <button
                        className="form-upload__btn form-upload__btn-publish"
                        type="submit"
                        disabled={!isTitleValid || !isDescriptionValid}
                      >
                        PUBLISH
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
export default VideoUpload;
