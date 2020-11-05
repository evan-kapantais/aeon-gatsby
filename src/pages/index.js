import React, { useState, useEffect } from "react";
import SEO from "../components/seo";
import "./index.scss";
import Popup from "../components/Popup";
import Modal from "../components/Modal";
import { DiscordButton, FacebookButton } from "../components/SocialButton";

const IndexPage = () => {
  useEffect(() => {
    playIntroSequence();
  }, []);

  const playIntroSequence = () => {
    const banner = document.querySelector("#banner");
    const titleHeading = document.querySelector(".title-heading");
    const subPar = document.querySelector(".header-container > p");
    const countdown = document.querySelector(".countdown-wrapper");
    const icons = document.querySelector(".social-links");

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
      icons.style.opacity = 1;
    }, 7000);
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

  const loadPopup = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1000 ? <Popup /> : <Modal />;
    }
  };

  return (
    <>
      <SEO title='Home' />
      <section id='banner'>
        <div className='social-links'>
          <DiscordButton />
          <FacebookButton />
          <a className='text-link' href='http://forum.l2aeon.com/'>
            Forum
          </a>
        </div>
        <div className='header-container'>
          <h1 className='title-heading'>Lineage II: Aeon</h1>
          <p>x100 Classic High Five</p>
        </div>
        <div className='countdown-wrapper'>
          <p>Server goes live on</p>
          <h2 className='countdown'>
            {/* {calculateTimeLeft().days} days, {` `}
            {calculateTimeLeft().hours} hours, {` `}
            {calculateTimeLeft().minutes} minutes, {` `}
            {calculateTimeLeft().seconds} seconds */}
            27 November 2020 - 09:00 PM
          </h2>
        </div>
        {loadPopup()}
      </section>
    </>
  );
};

export default IndexPage;
