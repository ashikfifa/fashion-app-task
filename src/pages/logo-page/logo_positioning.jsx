import React, { useState } from "react";
import Draggable from "react-draggable";
import "./logo_positioning.css";
import tshirtImg from "../../../public/img/blank-tshirt.png";

const LogoPositioning = () => {
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState({ width: 100, height: 100 });

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = (e) => {
    const newWidth = e.target.value;
    const aspectRatio = logoSize.width / logoSize.height;
    setLogoSize({
      width: newWidth / aspectRatio,
      height: newWidth / aspectRatio,
    });
  };

  return (
    <div className="logo_pos_container">
      <div className="imageBorder" style={{ position: "relative" }}>
        <img height="400px" width="400px" src={tshirtImg} alt="tshirtImg" />
        {logo && (
          <Draggable>
            <img
              src={logo}
              alt="Logo"
              className="draggable-logo"
              style={{
                position: "absolute",
                width: logoSize.width,
                height: logoSize.height,
                cursor: "move",
              }}
            />
          </Draggable>
        )}
      </div>

      <div>
        <input type="file" accept="image/*" onChange={handleLogoUpload} />
        <div style={{ marginTop: "20px" }}>
          <button>Submit</button>
        </div>
      </div>

      {logo && (
        <div style={{ marginTop: "20px" }}>
          <label>
            Resize Logo:
            <input
              type="range"
              min="50"
              max="300"
              value={logoSize.width}
              onChange={handleResize}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default LogoPositioning;
