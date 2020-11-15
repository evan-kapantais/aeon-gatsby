import React from "react";
import { Link } from "gatsby";
import Author from "../components/Author";

const PostCard = ({ node }) => {
  return (
    <Link
      to={node.fields.slug}
      key={node.frontmatter.title}
      className='post-card'
    >
      <p className='post-card-date'>{node.frontmatter.date}</p>
      <h1 className='post-card-title'>{node.frontmatter.title}</h1>
      <div className='post-card-data'>
        <Author author='Aeon Geo' />
      </div>
      <p className='post-card-excerpt'>{node.excerpt}</p>
    </Link>
  );
};

export default PostCard;
