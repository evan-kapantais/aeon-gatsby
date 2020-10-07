import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import { DiscordButton, FacebookButton } from "../components/SocialButton";
import "./index.scss";

const IndexPage = () => {
  useEffect(() => {
    playIntroSequence();
  }, []);

  const playIntroSequence = () => {
    const banner = document.querySelector("#banner");
    const titleHeading = document.querySelector(".title-heading");
    const subPar = document.querySelector(".header-container > p");
    const countdown = document.querySelector(".countdown-wrapper");
    const offer = document.querySelector(".offer");

    setTimeout(() => {
      banner.style.boxShadow = "inset 0 0 300px black";
    }, 0);

    setTimeout(() => {
      titleHeading.style.opacity = 1;
    }, 3500);

    setTimeout(() => {
      subPar.style.opacity = 1;
    }, 5000);

    setTimeout(() => {
      countdown.style.opacity = 1;
    }, 6000);

    setTimeout(() => {
      offer.classList.add("offer-open");
    }, 10000);
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2020-11-05") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <>
      <SEO title='Home' />
      <section id='banner'>
        <div className='header-container'>
          <h1 className='title-heading'>Lineage II: Aeon</h1>
          <p>x100 Classic High Five</p>
        </div>
        <div className='countdown-wrapper'>
          <p>Server goes live in</p>
          <h2 className='countdown'>
            {calculateTimeLeft().days} days, {` `}
            {calculateTimeLeft().hours} hours, {` `}
            {calculateTimeLeft().minutes} minutes, {` `}
            {calculateTimeLeft().seconds} seconds
          </h2>
        </div>
        <div className='offer'>
          <button
            className='offer-open-button'
            type='button'
            onClick={() => {
              const popup = document.querySelector(".offer");
              popup.classList.remove("offer-close");
              popup.classList.add("offer-open");
            }}
          >
            {`<`}
          </button>
          <div className='offer-social-icons'>
            <div className='social-icon-wrapper'>
              <DiscordButton />
            </div>
            <div className='social-icon-wrapper'>
              <FacebookButton />
            </div>
          </div>
          <div className='offer-text'>
            <button
              className='close-button'
              type='button'
              onClick={() => {
                const offer = document.querySelector(".offer");
                offer.classList.remove("offer-open");
                offer.classList.add("offer-close");
              }}
            >
              x
            </button>
            <h2>Hey, welcome to Aeon!</h2>
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
      </section>
    </>
  );
};

export default IndexPage;
