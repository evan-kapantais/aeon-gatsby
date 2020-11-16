import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostCard from "../components/PostCard";

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='News' />
      <header className='page-header'>
        <h1 className='page-title'>News</h1>
      </header>
      <main className='page-main'>
        <div className='page-container'>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostCard key={node.frontmatter.title} node={node} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const postsQuery = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          timeToRead
          html
          excerpt
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
    }
  }
`;

export default NewsPage;
