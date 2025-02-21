import React from "react";
import "./MainForm.css";

function MainForm() {
  return (
    <div className="container">
      <img className="logo" src="./images/logo-full.svg" alt="" />

      <p className="title">
        Your Journey to Coding Conf <br />
        2025 Starts Here!
      </p>

      <p className="description">
        Secure your spot at next year's biggest coding conference.
      </p>

      <form action="#" method="post" className="form">
        <div className="input-avatar">
          <label htmlFor="avatar">Upload Avatar</label>
          <div className="uploadContainer">
            <input type="file" id="fileInput" hidden />
            <img
              className="upload-icon"
              src="./images/icon-upload.svg"
              alt=""
            />
            <span>Drag and drop or click to upload</span>
          </div>
          <div className="row">
            <img src="./images/icon-info.svg" className="info-icon" alt="" />
            <span className="message">
              Upload your photo (JPG or PNG, max size: 500KB).
            </span>
          </div>
        </div>

        <div className="inputDiv">
          <label htmlFor="">Full Name</label>
          <input className="input" type="text" />
        </div>
        <div className="inputDiv">
          <label htmlFor="">Email Address</label>
          <input
            className="input"
            type="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="">GitHub Username</label>
          <input className="input" type="text" placeholder="@yourusername" />
        </div>
        <button type="submit" className="btn">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default MainForm;
