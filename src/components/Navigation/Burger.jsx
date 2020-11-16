import React from "react";

const Burger = () => {
  const showMenu = e => {
    const navList = document.querySelector(".nav-list");

    navList.classList.contains("shown")
      ? navList.classList.remove("shown")
      : navList.classList.add("shown");

    const burger = e.currentTarget;

    burger.classList.contains("burger-close")
      ? burger.classList.remove("burger-close")
      : burger.classList.add("burger-close");
  };

  return (
    <button className='burger-button' onClick={showMenu}>
      <div className='burger-dash'></div>
      <div className='burger-dash'></div>
      <div className='burger-dash'></div>
    </button>
  );
};

export default Burger;
