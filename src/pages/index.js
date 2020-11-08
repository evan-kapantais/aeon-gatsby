import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import { Link } from "gatsby";

// TODO: add offer popup

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <section id='banner'>
        {/* <div className='social-links'>
          <DiscordButton />
          <FacebookButton />
          <a className='text-link' href='http://forum.l2aeon.com/'>
            Forum
          </a>
        </div> */}
        <div className='banner-container'>
          <h1 className='title-heading'>Lineage II: Aeon</h1>
          <p>x100 Classic High Five</p>
          <Link to='/connect' className='link-button'>
            Play Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
