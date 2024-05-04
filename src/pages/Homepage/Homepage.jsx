import React, { useState } from "react";
import right_arrow from "../../assets/right_arrow.png";
import imageCompression from "browser-image-compression";

import "./homepage.css";
function Homepage() {
  const [image, setImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [maxSizeMB, setMaxSizeMB] = useState("0.05")
  const [maxResolution, setMaxResolution] = useState("1080")
  const [imageName, setImageName] = useState("");
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressedImageSize, setCompressedImageSize] = useState("");
  const [loading, setLoading] = useState(false);

  const onImageChangeHandler = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setImage(true);
      setImageFile(imageFile);
      setImageName(imageFile.name);
    }
  };

  const onSubmitHandler = async (e) => {
    setLoading(true);
    const options = {
      maxSizeMB: maxSizeMB,
      useWebWorker: true,
      maxWidthOrHeight: maxResolution,
    };
    const compressedFile = await imageCompression(imageFile, options);
    setCompressedImageSize(Math.floor(compressedFile.size / 1024));
    setCompressedImage(URL.createObjectURL(compressedFile));
    setLoading(false);
  };

  return (
    <>
      <main>
        <div className="main-left">
          <div className="left-settings">
            <div className="upload-image">
              <label htmlFor="image">
                {image ? imageName : "Choose an image"}
              </label>
              <input
                hidden
                id="image"
                type="file"
                accept="image/*"
                onChange={onImageChangeHandler}
              />
            </div>
            <div className="max-size-slider">
              <p>Compression size</p>
              <input type="range" min="0" max="1024" />
            </div>

            <select onChange={(e)=>setMaxResolution(e.target.value)} value={maxResolution}>
              <option value="">Select resolution</option>
              <option value="720">720px</option>
              <option value="480">480px</option>
              <option value="240">240px</option>
              <option value="144">144px</option>
            </select>
          </div>
          <div className="left-description">
            <div className="compressed-image-description">
              <span>
                Estimated <br></br>Size
              </span>
              <span>{compressedImageSize} KB</span>
            </div>
            <button onClick={onSubmitHandler}>
              <p>Compress Image</p>
              <img src={right_arrow} alt="right_arrow_icon" width={"15px"} />
            </button>
          </div>
        </div>
        <div className="main-right">
          {!loading ? (
            <div className="compressed-image">
              <a href={compressedImage} download="compressed_img">
                <img src={compressedImage} alt="" />
              </a>
            </div>
          ) : (
            <div className="compressed-image">Processing...</div>
          )}
          {/* <div className="compressed-image">
          <img src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" alt="" />
          <a href="google.com">Download</a>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Homepage;
