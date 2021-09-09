import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "./index.css";
import Modal from "../common/Modal";

const ArticleRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [requestModal, setRequestModal] = useState(false);
  const [emptyRequest, setEmptyRequest] = useState(
    "form-control requestQuestion"
  );
  const [files, setFiles] = useState([]);
  const [fileURLs, setFileURLs] = useState([{}]);
  const delayInMilliseconds = 3000; //1 second

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20%",
    borderWidth: 3,
    borderRadius: 3,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  function StyledDropzone(props) {
    const onDrop = useCallback((acceptedFiles) => {
      const filesList = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      // console.log(files);
      setFiles([...files, ...filesList]);
    }, []);

    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      onDrop,
    });

    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragActive, isDragReject, isDragAccept]
    );

    // console.log(files);
    const thumbs = files.map((file) => (
      <div className="thumbs" key={file.name}>
        <p className="thumbsText">{file.name}</p>
        <span
          onClick={(e) => removeThumb(files, file)}
          className="thumbsDelete"
        >
          &#215;
        </span>
      </div>
    ));

    const removeThumb = (files, file) => {
      setFiles(files.filter((f) => f !== file));
      // console.log(files);
    };

    useEffect(
      () => () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      },
      [files]
    );

    return (
      <section>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div>Drag and drop your images here.</div>
        </div>
        <aside>{thumbs}</aside>
      </section>
    );
  }

  const openModal = () => {
    if (request === "") {
      setEmptyRequest("form-control emptyRequestQuestion");
    } else {
      files.forEach((file) => {
        const formData = new FormData();
        formData.append("supportingImages", file);
        //upload images
        axios
          .post(
            "https://wtdback.qa.bazaarvoice.com/api/uploadfile/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then(({ data }) => {
            setFileURLs(fileURLs.push({ link: data }));
          })
          .catch((er) => console.log(er));
      });

      setTimeout(function () {
        if (files.length == fileURLs.length - 1) {
          fileURLs.shift();
          axios
            .post("https://wtdback.qa.bazaarvoice.com/api/", {
              title: "Requested Post",
              q: request,
              a: " ",
              n: 0,
              isPublished: false,
              email: email,
              nickname: "Default",
              t: [],
              l: [...fileURLs],
            })
            .then(({ statusText }) => {
              console.log(statusText);
              if (statusText === "") {
                setShowModal((prev) => !prev);
                setRequestModal(true);
              }
            })
            .catch((er) => console.log(er));
        }
      }, delayInMilliseconds);
    }
  };

  return (
    <div className="col request-container">
      <h2 className="card-title text-center display-5 bv-blue-text">
        Request an Article
      </h2>
      <div className="row mt-4">
        <div className="col-9">
          <textarea
            id="requestQuestion"
            type="text"
            className={emptyRequest}
            placeholder="Add as many details as you can."
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            onInput={() => setEmptyRequest("form-control requestQuestion")}
          />
        </div>
        <div className="col-3 d-flex flex-column justify-content-between">
          <StyledDropzone />
          <input
            id="requesterEmail"
            placeholder="Your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-1">
        <div className="offset-9 col-4">
          <span className="emailMeFooter ">
            notify me when a response is posted
          </span>
          <input className="form-check-input" type="checkbox" value="" />
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="offset-9 col-4">
          <button
            onClick={openModal}
            className="btn btn-bv font request-font"
            id="requestModal"
          >
            REQUEST
          </button>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={() => setShowModal(false)}
            requestModal={requestModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleRequest;
