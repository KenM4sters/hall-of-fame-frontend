import React, { useEffect, useRef, useState } from "react";
import { getAllCharacters, saveCharacter, updateCharacterImage } from "./api/GameService";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";


const App = () => {
  const modalRef = useRef();
  const fileRef = useRef();
  const[data, setData] = useState({});
  const [file, setFile] = useState(undefined);
  const [values, setValues] = useState({
    name: "",
    game: "",
  });

  const getAllChars = async (page = 0, size = 4) => {
    try {
      const {data} = await getAllCharacters(page, size);
      setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNewCharacter = async (e) => {
    e.preventDefault();
    try {
      const { data } = await saveCharacter();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", data.id);
      const { data: imageUrl } = await updateCharacterImage(formData);
      setFile(undefined);
      setValues({
        name: "",
        game: "",
      });
      fileRef.current.value = null;
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllChars();
  }, []);


  const toggleModal = (show) =>
    show ? modalRef.current.showModal() : modalRef.current.close();

  return (
    <>
      <Header toggleModal={toggleModal} numOfGames={data.totalElements} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={"/games"} />} />
            <Route
              path="/games"
              element={
                data.content ? (
                  <div>Hello World</div>
                ) : (
                  <p>waiting for data...</p>
                )
              }
            />
            <Route
              path="/games/:id"
              element={<div>Id page</div>}
            />
          </Routes>
        </div>
      </main>
      {/* Modal (Add Game) */}
      <dialog ref={modalRef} className="modal" id="modal">
        <section className="modal_wrapper">
          <div className="modal_header">
            <h3>New Game</h3>
            <p onClick={() => toggleModal(false)} className="close-tag">
              close
            </p>
          </div>
          <div className="divider"></div>
          <div className="modal_body">
            <form onSubmit={handleNewCharacter} className="modal_form">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Character Name</span>
                  <div className="input-box-text">
                    <input
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="input-box">
                  <span className="details">Game Title</span>
                  <div className="input-box-text">
                    <input
                      type="text"
                      value={values.game}
                      onChange={onChange}
                      name="game"
                      required
                    />
                  </div>
                </div>
                <div className="file-input">
                  <span className="details">Profile Photo</span>
                  <div className="">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      ref={fileRef}
                      name="photo"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form_footer">
                <button
                  onClick={() => toggleModal(false)}
                  type="button"
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </dialog>
      <ToastContainer />
    </>
  );
};

export default App;
