import React, { useEffect } from "react";
import styled from "styled-components";

const Pop = styled.div`
  display: flex;
  position: absolute;
  width: 450px;
  top: 2rem;
  right: -45rem;
  background: #fff;
  padding: 2rem;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 10px;
  box-shadow: 5px 5px 0 #ee5b5f;
  transition: all 500ms ease-in-out;

  &:after {
    content: "";
    position: absolute;
    right: -10px;
    top: 1.5rem;
    background: #fff;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
  }

  .offer-text {
    > hr {
      margin: 1rem 0;
      width: 20%;
      border-color: rgb(237, 237, 237);
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .paragraphs {
    font-weight: 400;
    font-size: 0.9rem;

    p:first-child {
      margin-bottom: 0.8rem;
    }
  }

  .close-button {
    border: none;
    outline: none;
    background: none;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    line-height: 1;
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Popup = () => {
  useEffect(() => {
    setTimeout(() => {
      controlPopup.open();
    }, 10000);
  }, []);

  const controlPopup = {
    close: () => {
      const popup = document.querySelector(".offer");
      popup.style.right = "-45rem";

      setTimeout(() => {
        popup.style.display = "none";
      }, 400);
    },
    open: () => {
      const popup = document.querySelector(".offer");
      popup.style.right = "2rem";
    },
  };

  return (
    <Pop className='offer'>
      <button
        className='close-button'
        type='button'
        onClick={() => controlPopup.close()}
      >
        x
      </button>
      <div className='offer-text'>
        <h2>Hey, welcome to Aeon!</h2>
        <hr />
        <div className='paragraphs'>
          <p>
            As a side note, we offer free level 11 clans with skills for leaders
            with 10+ members.
          </p>
          <p>
            Feel free to hop on to Discord and chat with us if you have any
            questions.
          </p>
        </div>
      </div>
    </Pop>
  );
};

export default Popup;
