import React, { useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var countDownDate = new Date("Nov 27, 2020 21:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  return (
    <div className='countdown-wrapper'>
      <p>Server Will Go Live In</p>
      <h3>
        {days} days • {hours} hours • {minutes} minutes • {seconds} seconds
      </h3>
    </div>
  );
};

export default Countdown;
