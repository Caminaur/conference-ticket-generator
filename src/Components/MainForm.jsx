import React from "react";
import "./MainForm.css";

function MainForm() {
  const maxSize = 300000;
  const validTypes = ["image/png", "image/jpeg", "image/jpg"];
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleFileDrop(e) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function handleFiles(files) {
    let validFiles = [];
    let errors = [];

    for (const file of files) {
      const fileType = file.type;
      const fileSize = file.size;
      let isFileValid = true;

      if (fileSize > maxSize) {
        errors.push(`The image must be smaller than ${maxSize} bites!`);
        isFileValid = false;
      }

      if (!validTypes.includes(fileType)) {
        errors.push(`The image must be JPG, JPEG or PNG!`);
        isFileValid = false;
      }

      if (isFileValid) {
        validFiles.push(file);
      }
    }

    // remove duplicated
    errors = errors.filter((value, index, self) => {
      return self.indexOf(value) === index; // Mantiene solo el primer valor encontrado
    });

    const icon = document.querySelector("#upload-avatar-message svg");
    const message = document.querySelector("#upload-avatar-message span");

    // If there are errors
    if (errors.length > 0) {
      // Display errors
      message.style.color = "firebrick";
      icon.style.stroke = "firebrick";
      let displayedMessage = "";
      for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        displayedMessage += error + "<br/>";
      }
      message.innerHTML = displayedMessage;
    }
    // If there aren't any errors
    else {
      message.innerHTML = `Upload your photo (JPG or PNG, max size: ${
        maxSize / 1000
      }KB).`;
      message.style.color = "#D1D0D5";
      icon.style.stroke = "#D1D0D5";
      // Put it in the input

      // Assign the dropped file to the hidden input
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(validFiles[0]);
      document.getElementById("fileInput").files = dataTransfer.files;

      // Show preview
      const reader = new FileReader();
      const preview = document.querySelector(".upload-icon");
      reader.onload = (e) => {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(validFiles[0]);
    }
  }

  function validateInputs(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const gitProfile = document.getElementById("github");
    const avatar = document.getElementById("fileInput");
    let container = document.querySelector(".container");
    let errorsCount = 0;
    container.setAttribute("class", "container");

    const inputs = [name, email, gitProfile];

    for (const input of inputs) {
      let parentDiv = input.parentElement;

      if (parentDiv.querySelector(".error")) {
        parentDiv.querySelector(".error").remove();
      }

      if (input.value === "") {
        let p = document.createElement("p");
        p.innerHTML = "This field can not be empty";
        p.classList.add("error");
        parentDiv.appendChild(p);
        errorsCount++;
      } else {
        if (parentDiv.querySelector(".error")) {
          parentDiv.querySelector(".error").remove();
        }
      }
    }
    if (errorsCount) {
      container.classList.add(`reduce-${errorsCount}`);
    }

    validateEmail();

    const icon = document.querySelector("#upload-avatar-message svg");
    const message = document.querySelector("#upload-avatar-message span");
    if (avatar.files.length === 0) {
      // Display errors
      message.style.color = "firebrick";
      icon.style.stroke = "firebrick";
      message.innerHTML = "You must upload an Avatar";
    } else {
      message.innerHTML = `Upload your photo (JPG or PNG, max size: ${
        maxSize / 1000
      }KB).`;
      message.style.color = "#D1D0D5";
      icon.style.stroke = "#D1D0D5";
    }
  }

  function validateEmail() {
    const emailInput = document.getElementById("email");
    let parentDiv = emailInput.parentElement;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(emailInput.value);

    // remove error if there is any
    if (parentDiv.querySelector(".error")) {
      parentDiv.querySelector(".error").remove();
    }

    if (!isValid) {
      // show error
      let p = document.createElement("p");
      p.innerHTML = "Please enter a valid email address";
      p.classList.add("error");
      parentDiv.appendChild(p);
    }
  }
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

      <form action="#" method="post" className="form" id="form">
        <div className="input-avatar">
          <label htmlFor="avatar">Upload Avatar</label>
          <div
            className="uploadContainer"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleFileDrop(e)}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={(e) => handleFiles(e.target.files)}
            />
            <img
              className="upload-icon"
              src="./images/icon-upload.svg"
              alt=""
            />
            <span>Drag and drop or click to upload</span>
          </div>
          <div className="row" id="upload-avatar-message">
            <svg
              className="info-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              stroke="#D1D0D5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="inherit"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
              <path
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>
            <span className="message">
              {`Upload your photo (JPG or PNG, max size: ${maxSize / 1000}KB).`}
            </span>
          </div>
        </div>

        <div className="inputDiv">
          <label htmlFor="">Full Name</label>
          <input className="input" type="text" id="name" />
        </div>
        <div className="inputDiv">
          <label htmlFor="">Email Address</label>
          <input
            id="email"
            className="input"
            type="email"
            placeholder="example@email.com"
            onBlur={(e) => validateEmail(e)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="">GitHub Username</label>
          <input
            className="input"
            type="text"
            placeholder="@yourusername"
            id="github"
          />
        </div>
        <button
          type="submit"
          className="btn"
          onClick={(e) => validateInputs(e)}
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default MainForm;
