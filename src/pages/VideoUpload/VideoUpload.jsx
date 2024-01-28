import "./VideoUpload.scss";
import formImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function VideoUpload() {
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
                <form-upload className="form-upload">
                  <div className="form-upload__content">
                    <div className="form-upload__left">
                      <div className="form-upload__label-wrapper">
                        <label className="form-upload__label"> VIDEO THUMBNAIL</label>
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
                            ADD A VIDEO DESCRIPTION
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <input
                            className="form-upload__input form-upload__title"
                            type="text"
                            placeholder="Add a title to your video"
                          />
                        </div>
                      </div>

                      <div className="form-upload__description-wrapper">
                        <div className="form-upload__label-wrapper">
                          <label className="form-upload__label">
                            {" "}
                            ADD A VIDEO DESCRIPTION
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <textarea
                            className="form-upload__input form-upload__description"
                            type="text"
                            placeholder="Add a description to your video"
                            rows={3}
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
                      <img className="form-upload__btn-icon" src={publishIcon} />
                      <button
                        className="form-upload__btn form-upload__btn-publish"
                        type="submit"
                      >
                        PUBLISH
                      </button>
                    </div>
                  </div>
                </form-upload>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
export default VideoUpload;
