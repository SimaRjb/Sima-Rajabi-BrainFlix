import "./VideoUpload.scss";
import formImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoUpload(props) {
const apiKey = props.apiKey;

const baseUrl = "http://localhost:8081"
const navigate = useNavigate();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const [isTitleValid, setIsTitleValid] = useState(false);
const [isDescriptionValid, setIsDescriptionValid] = useState(false);
// const [isFormValid, setIsFormValid] = useState(false);

// const validateTitle = () => {
//   setIsTitleValid(title.length >= 5); // Update title validity based on length
// };

const handleChangeTitle = (event) => {
  const value = event.target.value;
  setTitle(value);
  setIsTitleValid(value.length > 4); // Check if title length is longer than 4 characters
};

const handleDescriptionChange = (event) => {
  const value = event.target.value;
  setDescription(value);
  setIsDescriptionValid(value.length > 10); // Check if description length is longer than 10 characters
};



const postVideo = async () => {
  try {
    const res = await axios.post(`${baseUrl}/videos?api_key=abc` ,{
      title: title,
      description: description
    });
    console.log("post response: ",res.data)


  } catch (error) {
    console.error(error);
  }
};
  const submitHandler = (event)=>{
    event.preventDefault();

    if(isTitleValid && isDescriptionValid){
      postVideo();
    }
    else{
      console.log("title is invalid")
    }
  }


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
                            ADD A VIDEO TITLE {!isTitleValid && <span className="label-error">  (Must be longer than 4 characters)</span>}
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <input
                            className={`form-upload__input form-upload__title ${isTitleValid ? 'input-valid' : 'input-invalid'}`}
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
                            ADD A VIDEO DESCRIPTION {!isDescriptionValid && <span className="label-error">  (Must be longer than 10 characters)</span>}
                          </label>
                        </div>
                        <div className="form-upload__input-wrapper">
                          <textarea
                            className={`form-upload__input form-upload__description ${isDescriptionValid ? 'input-valid' : 'input-invalid'}`}
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
                      <img className="form-upload__btn-icon" src={publishIcon} />
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
//////
/////////////////////////////////////////////////////////



// import React, { useState } from 'react';
// import axios from 'axios';

// function VideoUpload() {
//   const baseUrl = "http://localhost:8081";
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isTitleValid, setIsTitleValid] = useState(true);
//   const [isDescriptionValid, setIsDescriptionValid] = useState(true);

//   const handleChangeTitle = (event) => {
//     const value = event.target.value;
//     setTitle(value);
//     setIsTitleValid(value.length > 4); // Check if title length is longer than 4 characters
//   };

//   const handleDescriptionChange = (event) => {
//     const value = event.target.value;
//     setDescription(value);
//     setIsDescriptionValid(value.length > 10); // Check if description length is longer than 10 characters
//   };

//   const postVideo = async () => {
//     try {
//       const res = await axios.post(`${baseUrl}/videos?api_key=abc`, {
//         title: title,
//         description: description
//       });
//       console.log("post response: ", res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (isTitleValid && isDescriptionValid) {
//       postVideo();
//     }
//   };

//   return (
//     <main>
//       <form onSubmit={submitHandler} className="form-upload">
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             id="title"
//             type="text"
//             placeholder="Add a title to your video"
//             value={title}
//             onChange={handleChangeTitle}
//             className={isTitleValid ? 'valid' : 'invalid'}
//           />
//           {!isTitleValid && <span className="error">Title must be longer than 4 characters</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             placeholder="Add a description to your video"
//             value={description}
//             onChange={handleDescriptionChange}
//             className={isDescriptionValid ? 'valid' : 'invalid'}
//           />
//           {!isDescriptionValid && <span className="error">Description must be longer than 10 characters</span>}
//         </div>
//         <button type="submit">Publish</button>
//       </form>
//     </main>
//   );
// }

// export default VideoUpload;



// ///////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';

// function VideoUpload() {
//   const baseUrl = "http://localhost:8081";
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isTitleValid, setIsTitleValid] = useState(true);
//   const [isDescriptionValid, setIsDescriptionValid] = useState(true);

//   const handleChangeTitle = (event) => {
//     const value = event.target.value;
//     setTitle(value);
//     setIsTitleValid(value.trim().length > 0); // Check if title is not empty
//   };

//   const handleDescriptionChange = (event) => {
//     const value = event.target.value;
//     setDescription(value);
//     setIsDescriptionValid(value.trim().length > 0); // Check if description is not empty
//   };

//   const postVideo = async () => {
//     try {
//       const res = await axios.post(`${baseUrl}/videos?api_key=abc`, {
//         title: title,
//         description: description
//       });
//       console.log("post response: ", res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (isTitleValid && isDescriptionValid) {
//       postVideo();
//     }
//   };

//   return (
//     <main>
//       <form onSubmit={submitHandler} className="form-upload">
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             id="title"
//             type="text"
//             placeholder="Add a title to your video"
//             value={title}
//             onChange={handleChangeTitle}
//             className={isTitleValid ? 'valid' : 'invalid'}
//           />
//           {!isTitleValid && <span className="error">Title is required</span>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             placeholder="Add a description to your video"
//             value={description}
//             onChange={handleDescriptionChange}
//             className={isDescriptionValid ? 'valid' : 'invalid'}
//           />
//           {!isDescriptionValid && <span className="error">Description is required</span>}
//         </div>
//         <button type="submit">Publish</button>
//       </form>
//     </main>
//   );
// }

// export default VideoUpload;





















// /////////////////////

// // import "./VideoUpload.scss";
// // import formImg from "../../assets/images/Upload-video-preview.jpg";
// // import publishIcon from "../../assets/icons/publish.svg";
// // import { useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // function VideoUpload(props) {
// //   const apiKey = props.apiKey;

// //   const baseUrl = "http://localhost:8081";
// //   const navigate = useNavigate();
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [isTitleValid, setIsTitleValid] = useState(true); // State to track title validity

// //   const validateTitle = () => {
// //     setIsTitleValid(title.length >= 5); // Update title validity based on length
// //   };

// //   const postVideo = async () => {
// //     try {
// //       const res = await axios.post(`${baseUrl}/videos?api_key=abc`, {
// //         title: title,
// //         description: description
// //       });
// //       console.log("post response: ", res.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const submitHandler = (event) => {
// //     event.preventDefault();
// //     validateTitle(); // Validate title before submitting
// //     if (isTitleValid) {
// //       postVideo();
// //     }
// //   };

// //   const handleChangeTitle = (event) => {
// //     setTitle(event.target.value);
// //   };

// //   const handleDescriptionChange = (event) => {
// //     setDescription(event.target.value);
// //   };

// //   return (
// //     <main>
// //       <section className="upload-wrapper">
// //         <div className="upload">
// //           <div className="upload__content">
// //             <div className="upload__title-wrapper">
// //               <div className="upload__title-content">
// //                 <h1 className="upload__title">Upload Video</h1>
// //               </div>
// //             </div>

// //             <section className="form-upload-wrapper">
// //               <div className="form-upload-container">
// //                 <form onSubmit={submitHandler} className="form-upload">
// //                   <div className="form-upload__content">
// //                     <div className="form-upload__left">
// //                       <div className="form-upload__label-wrapper">
// //                         <label className="form-upload__label">
// //                           VIDEO THUMBNAIL
// //                         </label>
// //                       </div>
// //                       <div className="form-upload__img-wrapper">
// //                         <img
// //                           className="form-upload__img"
// //                           src={formImg}
// //                           alt="preview"
// //                         />
// //                       </div>
// //                     </div>

// //                     <div className="form-upload__right">
// //                       <div className="form-upload__title-wrapper">
// //                         <div className="form-upload__label-wrapper">
// //                           <label className="form-upload__label">
// //                             ADD A VIDEO DESCRIPTION
// //                           </label>
// //                         </div>
// //                         <div className="form-upload__input-wrapper">
// //                           <input
// //                             className="form-upload__input form-upload__title"
// //                             type="text"
// //                             placeholder="Add a title to your video"
// //                             name="title"
// //                             onChange={handleChangeTitle}
// //                             value={title}
// //                           />
// //                           {/* Conditionally render additional text for invalid title */}
// //                           {!isTitleValid && (
// //                             <p className="form-upload__invalid-message">
// //                               Title must be at least 5 characters long
// //                             </p>
// //                           )}
// //                         </div>
// //                       </div>

// //                       <div className="form-upload__description-wrapper">
// //                         <div className="form-upload__label-wrapper">
// //                           <label className="form-upload__label">
// //                             ADD A VIDEO DESCRIPTION
// //                           </label>
// //                         </div>
// //                         <div className="form-upload__input-wrapper">
// //                           <textarea
// //                             className="form-upload__input form-upload__description"
// //                             type="text"
// //                             placeholder="Add a description to your video"
// //                             rows={3}
// //                             name="description"
// //                             onChange={handleDescriptionChange}
// //                             value={description}
// //                           />
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="form-upload__btn-wrapper">
// //                     <div className="form-upload__btn-cancel-wrapper form-upload__btn-container">
// //                       <button className="form-upload__btn form-upload__btn-cancel">
// //                         CANCEL
// //                       </button>
// //                     </div>
// //                     <div className="form-upload__btn-publish-wrapper form-upload__btn-container">
// //                       <img
// //                         className="form-upload__btn-icon"
// //                         src={publishIcon}
// //                       />
// //                       <button
// //                         className="form-upload__btn form-upload__btn-publish"
// //                         type="submit"
// //                       >
// //                         PUBLISH
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </form>
// //               </div>
// //             </section>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// // export default VideoUpload;

