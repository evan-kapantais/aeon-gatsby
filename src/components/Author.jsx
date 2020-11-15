import React from "react";
import { authors } from "../data/authors";

const Author = ({ author }) => {
  return (
    <div className='author-wrapper'>
      <img src={require(`../images/${authors[author]}`)} alt='Author Avatar' />
      <p>{author}</p>
    </div>
  );
};

export default Author;
