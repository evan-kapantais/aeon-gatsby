import React, { useEffect } from "react";

const Offer = () => {
  const offerState = JSON.parse(sessionStorage.getItem("offer"));
  console.log(offerState);

  useEffect(() => {
    if (offerState) {
      setTimeout(() => {
        document.querySelector(".offer-overlay").classList.add("open");
      }, 2000);
    }
  });

  return (
    <div className='offer-overlay'>
      <div className='offer-card'>
        <button
          type='button'
          className='offer-card-close'
          onClick={() => {
            const overlay = document.querySelector(".offer-overlay");
            overlay.classList.remove("open");
            overlay.classList.add("closed");
            sessionStorage.setItem("offer", false);
          }}
        >
          x
        </button>
        <div className='text-wrapper'>
          <h2>Welcome to Aeon!</h2>
          <p>
            We offer a free level 11 clan for parties with 10 or more active
            members.
          </p>
          <p>Join us on discord to learn more!!</p>
        </div>
        <div className='discord-widget-wrapper'>
          <iframe
            title='discord widget'
            src='https://discordapp.com/widget?id=762746984335278081&amp;theme=dark'
            data-attr-src='https://discordapp.com/widget?id=762746984335278081&amp;theme=dark'
            width='100%'
            height='400'
            allowtransparency='true'
            frameBorder='0'
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Offer;
