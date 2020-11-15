import React from "react";
import SEO from "../components/seo";
import Offer from "../components/Offer";
import Layout from "../components/Layout";
import Countdown from "../components/Countdown";
import { Link } from "gatsby";

// TODO: don't open overlay more than once

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Offer />
      <section id='banner'>
        <a href='https://vgw.hopzone.net/site/vote/104639/1'>
          <img
            src='https://hopzone.r.worldssl.net/img/_vbanners/lineage2/Vote_01.gif'
            alt='Vote our sever on HopZone.Net - top l2 servers'
            style={{
              border: 0,
              position: "fixed",
              bottom: `1rem`,
              right: `1rem`,
              width: 140,
              height: 120,
              zIndex: 1,
            }}
          />
        </a>
        <a
          href='https://l2topzone.com/vote/id/17480'
          target='_blank'
          title='l2topzone'
          rel='noopener noreferrer'
        >
          <img
            src='https://l2topzone.com/vb/l2topzone-Lineage2-vote-banner-top-left-2.png'
            style={{
              position: "fixed",
              top: `1rem`,
              left: `1rem`,
              zIndex: 1,
            }}
            alt='l2topzone.com'
            border='0'
          />
        </a>
        <a
          id='top-l2jbrasil-left'
          href='//top.l2jbrasil.com/index.php?a=in&amp;u=l2aeonl2'
          target='_blank'
          style={{
            position: "fixed",
            bottom: `1rem`,
            left: `1rem`,
            zIndex: 1,
            width: 235,
          }}
          rel='noopener noreferrer'
        >
          <img
            src='//top.l2jbrasil.com/button_l.php?u=l2aeonl2&amp;m=left'
            alt='Top L2JBrasil  de Servidores de   Lineage2 '
            border='0'
            style={{
              maxWidth: "100%",
            }}
          />
        </a>
        <div className='banner-container'>
          <div className='main-text-wrapper'>
            <h1 className='title-heading'>Lineage II: Aeon</h1>
            <p>x100 Classic High Five</p>
          </div>
          <div className='banner-buttons-wrapper'>
            <Link to='/connect' className='link-button'>
              Play Now
            </Link>
            <a href='https://www.l2aeon.com/acm/' className='link-button'>
              Log In
            </a>
          </div>
          <Countdown />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
