import React, { useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";

const IndexPage = () => {
  useEffect(() => {
    playIntroSequence();
  }, []);

  const playIntroSequence = () => {
    const navbar = document.querySelector(".navbar");
    const titleHeading = document.querySelector(".title-heading");
    const headerButtons = document.querySelectorAll(".primary-button");
    const banner = document.querySelector("#banner");
    const scrollButton = document.querySelector(".scroll-button");

    navbar.style.top = "-83px";
    navbar.style.opacity = 0;
    navbar.style.transform = "rotateX(180deg)";

    setTimeout(() => {
      navbar.style.top = 0;
      navbar.style.opacity = 1;
      navbar.style.transform = "rotateX(0)";
    }, 3500);

    titleHeading.style.opacity = 1;
    titleHeading.style.transform = "translateY(0)";
    titleHeading.style.textShadow = "0 0 10px rgb(237, 210, 140)";

    headerButtons.forEach(button => {
      button.style.opacity = 1;
    });

    banner.style.boxShadow = "inset 0 -300px 300px black";

    setTimeout(() => {
      scrollButton.style.opacity = 1;
    }, 4500);
  };
  return (
    <Layout>
      <SEO title='Home' />
      <section id='banner'>
        <div class='header-container'>
          <h1 class='title-heading'>Lineage II: Aeon</h1>
          <a href='connect.html' type='button' class='primary-button'>
            Play Now
          </a>
        </div>
        <a
          aria-label='scroll button'
          href='#vote-banner'
          type='button'
          class='scroll-button'
        ></a>
      </section>
      <section id='vote-banner'>
        <div class='container'>
          <h1>Vote For Us</h1>
          <div class='vote-cards'>
            <a
              href='https://l2top.co/vote/server/Feronia'
              target='_blank'
              rel='noreferrer noopener'
              class='vote-card'
            >
              <img
                src={require("../images/thumb/l2.jpg")}
                alt='lineage 2 wallpaper'
              />
              <div class='card-text'>
                <p>Vote on</p>
                <h1>L2 Top</h1>
              </div>
            </a>
            <a
              href='https://l2network.eu/index.php?a=in&u=graffalo'
              target='_blank'
              rel='noreferrer noopener'
              class='vote-card'
            >
              <img
                src={require("../images/thumb/l2_01.jpg")}
                alt='lineage 2 wallpaper'
              />
              <div class='card-text'>
                <p>Vote on</p>
                <h1>L2 Network</h1>
              </div>
            </a>
            <a
              href='https://top.l2jbrasil.com/index.php?a=in&u=Graffalo'
              target='_blank'
              rel='noreferrer noopener'
              class='vote-card'
            >
              <img
                src={require("../images/thumb/l2_02.jpg")}
                alt='lineage 2 wallpaper'
              />
              <div class='card-text'>
                <p>Vote on</p>
                <h1>L2 Brazil</h1>
              </div>
            </a>
            <a
              href='https://www.gamebytes.net/index.php?a=in&u=graffalo'
              target='_blank'
              rel='noreferrer noopener'
              class='vote-card'
            >
              <img
                src={require("../images/thumb/l2_03.jpg")}
                alt='lineage 2 wallpaper'
              />
              <div class='card-text'>
                <p>Vote on</p>
                <h1>Gamebytes</h1>
              </div>
            </a>
            <a
              href='https://vgw.hopzone.net/site/vote/104531/1'
              target='_blank'
              rel='noreferrer noopener'
              class='vote-card'
            >
              <img
                src={require("../images/thumb/l2_05.jpg")}
                alt='lineage 2 wallpaper'
              />
              <div class='card-text'>
                <p>Vote on</p>
                <h1>Hopzone</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id='overview'>
        <div class='container'>
          <div class='text'>
            <h1 class='text-heading'>Gaming with Feronia</h1>
            <p>
              Welcome to <b>L2 Feronia</b>. We are a small group of friends who
              used to play Lineage 2 during its golden era. During the
              quarantine, nostalgia hit us hard and we came up with the idea of
              starting our own private L2 server.
            </p>
            <p>
              For the past month we have been doing our best to develop and
              maintain a stable server free of bugs, unbalanced classes and with
              a stable economy. Having said that, we need to put our efforts to
              the test with a solid player base. As a result, we are inviting
              you to join L2 Feronia's open beta stage.
            </p>
            <p>
              Please note that, although after the beta test is over all
              characters will be deleted, all players' accounts that were
              created during this phase will automatically be turned into
              premium accounts for one month.
            </p>
            <p>
              We'll be more than happy to have you with us during this phase and
              we hope you enjoy playing on our server!
            </p>
          </div>
          <img
            class='side-image'
            src={require("../images/l2_crop.jpg")}
            alt='lineage 2 wallpaper'
          />
        </div>
      </section>
      <section id='deco-01' class='deco'></section>
      <section id='server'>
        <div class='container'>
          <img
            class='side-image'
            src={require("../images/l2_03_crop.jpg")}
            alt='lineage 2 wallpaper'
          />
          <div class='text'>
            <h1 class='text-heading'>Custom Server Features</h1>
            <p>Flag PVP zones and custom areas</p>
            <p>Teleport ex .giran commands</p>
            <p>Bank system ex .withdraw and .deposit commands</p>
            <p>Vote system rewards</p>
            <p>PVP count rewards</p>
            <p>Nobles manager</p>
            <p>20 types of custom events with our test event engine</p>
          </div>
        </div>
      </section>
      <section id='deco-02' class='deco'></section>
      <section id='server-details'>
        <div class='table-container'>
          <h1 class='text-heading'>Server Info</h1>
          <table>
            <tr>
              <td>Rate Xp</td>
              <td>x100</td>
            </tr>
            <tr>
              <td>Rate Sp</td>
              <td>x100</td>
            </tr>
            <tr>
              <td>Rate Adena</td>
              <td>x100</td>
            </tr>
            <tr>
              <td>Rate Party Xp</td>
              <td>x200</td>
            </tr>
            <tr>
              <td>Rate Party Sp</td>
              <td>x200</td>
            </tr>
            <tr>
              <td>Rate Consumable Cost</td>
              <td>x1</td>
            </tr>
            <tr>
              <td>Rate Drop Items</td>
              <td>x1</td>
            </tr>
            <tr>
              <td>Rate Raid Drop Items</td>
              <td>x1</td>
            </tr>
          </table>
        </div>
        <div class='table-container'>
          <h1 class='text-heading'>Enchantments</h1>
          <table>
            <tr>
              <td>Normal</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Blessed</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Vote Scroll</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Safe Scroll</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Safe +4 Max</td>
              <td>+ 20</td>
            </tr>
            <tr>
              <td>Attributes Enchant Rate</td>
              <td>80%</td>
            </tr>
          </table>
        </div>
        <div class='small-section'>
          <div class='text'>
            <h1 class='text-heading'>Main Currency</h1>
            <p>Adena</p>
            <p>Festival Adena</p>
            <p>Donation Coins</p>
          </div>
          <div class='text'>
            <h1 class='text-heading'>Top Armor & Weapons</h1>
            <p>Elegia & Vorpal</p>
            <p>Top s 84 Weapons</p>
          </div>
          <div class='text'>
            <h1 class='text-heading'>Jewels</h1>
            <p>Rb Jewels (obtained from raidbosses and donations)</p>
            <p>Top s 84 jewels</p>
          </div>
        </div>
      </section>
      <section id='discord'>
        <div class='container'>
          <div class='text'>
            <h1 class='text-heading'>Join Us On Discord</h1>
            <p>
              We are building a gaming community and that could not happen
              without the proverbial discord server.
            </p>
            <p>
              Join the server using the widget on the right and feel free to
              drop by and say hi!
            </p>
          </div>
          <iframe
            title='discord widget'
            src='https://discordapp.com/widget?id=748247706690125895&theme=dark'
            width='350'
            height='500'
            allowtransparency='true'
            frameborder='0'
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
