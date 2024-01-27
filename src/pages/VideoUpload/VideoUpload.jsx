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

            <section className="form-wrapper">
              <div className="form-container">
                <form className="form">
                  <div className="form__content">
                  <div className="form__left">
                    <div className="form__label-wrapper">
                      <label className="form__label"> VIDEO THUMBNAIL</label>
                    </div>
                    <div className="form__img-wrapper">
                      <img className="form__img" src={formImg} alt="preview" />
                    </div>
                  </div>

                  <div className="form__right">

                    <div className="form__title-wrapper">
                    <div className="form__label-wrapper">
                      <label className="form__label"> ADD A VIDEO DESCRIPTION</label>
                    </div>
                    <div className="form__input-wrapper">
                      <input className="form__input form__title" type="text" placeholder="Add a title to your video"/>
                    </div>
                    </div>


                    <div className="form__description-wrapper">
                    <div className="form__label-wrapper">
                      <label className="form__label"> ADD A VIDEO DESCRIPTION</label>
                    </div>
                    <div className="form__input-wrapper">
                      <textarea className="form__input form__description" type="text" placeholder="Add a description to your video" rows={3}/>
                    </div>
                    </div>

                  </div>


                </div>

                <div className="form__btn-wrapper">

                <div className="form__btn-cancel-wrapper form__btn-container">
                  <button className="form__btn form__btn-cancel">CANCEL</button>
                  </div>
                  <div className="form__btn-publish-wrapper form__btn-container">
                  <img className="form__btn-icon" src={publishIcon}/>
                  <button className="form__btn form__btn-publish" type="submit">PUBLISH</button>
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
