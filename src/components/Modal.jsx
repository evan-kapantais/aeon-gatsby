import React, { useEffect } from "react";
import styled from "styled-components";

const Mod = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 800ms ease-in-out;

  .container {
    background: #fff;
    width: 450px;
    border-radius: 10px;
    padding: 4rem 2rem;
    line-height: 1.5;
    box-shadow: 5px 5px 0 #ee5b5f;
  }

  h2 > span {
    font-family: "Nevan";
  }

  hr {
    margin: 1rem 0 2rem 0;
    width: 20%;
  }

  p {
    margin-bottom: 1rem;
  }

  .close-button {
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    border: none;
    outline: none;
    background: none;
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Modal = () => {
  useEffect(() => {
    setTimeout(() => {
      controlModal.open();
    }, 1000);
  }, []);

  const controlModal = {
    open: () => {
      const modal = document.querySelector(".modal");
      modal.style.display = "flex";

      setTimeout(() => {
        modal.style.opacity = 1;
      }, 1);
    },
    close: () => {
      const modal = document.querySelector(".modal");
      modal.style.opacity = 0;

      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    },
  };
  const closeModal = e => {
    const modal = e.target.parentNode.parentNode;

    modal.style.opacity = 0;

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  return (
    <Mod className='modal'>
      <div className='container'>
        <button
          className='close-button'
          type='button'
          onClick={() => controlModal.close()}
        >
          x
        </button>
        <div>
          <h2>
            Hey, welcome to <span>Aeon</span>!
          </h2>
          <hr />
          <div className='paragraphs'>
            <p>
              As a side note, we offer free level 11 clans with skills for
              leaders with 10+ members.
            </p>
            <p>
              Feel free to hop on to Discord and chat with us if you have any
              questions.
            </p>
          </div>
        </div>
      </div>
    </Mod>
  );
};

export default Modal;
