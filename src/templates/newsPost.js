import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Author from "../components/Author";

//TODO: metadata for page head
//TODO: share post on social

const newsPost = ({ data }) => {
  const { title, date, author } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <header className='page-header'>
        <div className='post-data-container'>
          <h1 className='page-title'>{title}</h1>
          <div>
            <Author author={author} />
            <p className='post-date'>{date}</p>
          </div>
        </div>
      </header>
      <main className='page-main'>
        <article
          className='post-article'
          dangerouslySetInnerHTML={{ __html: html }}
        ></article>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        author
      }
    }
  }
`;

export default newsPost;
