import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./features.scss";

const Features = () => {
  useEffect(() => {
    document.getElementById("rates").classList.add("tab-active");

    document
      .querySelectorAll(".tab-button")[0]
      .classList.add("tab-button-active");

    const tabButtons = document.querySelectorAll(".tab-button");

    tabButtons.forEach(tabButton => {
      tabButton.addEventListener("click", () => {
        tabButtons.forEach(button =>
          button.classList.remove("tab-button-active")
        );
        tabButton.classList.add("tab-button-active");
      });
    });
  }, []);

  const showTab = name => {
    console.log(name);
    const featuresTabs = document.querySelectorAll(".tab");
    featuresTabs.forEach(tab => {
      tab.classList.remove("tab-active");
      tab.style.transform = "translateY(20px)";
      tab.style.opacity = 0;
    });
    document.getElementById(name).classList.add("tab-active");

    setTimeout(() => {
      document.getElementById(name).style.transition = "all 300ms ease";
      document.getElementById(name).style.transform = "translateY(0)";
      document.getElementById(name).style.opacity = 1;
    });
  };

  return (
    <Layout title='Features'>
      <SEO title='Features' />
      <section id='tabs'>
        <div class='tabs-container'>
          <h1>Server Features</h1>
          <div class='tab-buttons'>
            <button
              type='button'
              onClick={() => showTab("rates")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/015-letter.png")}
                alt='letter icon'
              />
              Rates
            </button>
            <button
              type='button'
              onClick={() => showTab("enchant")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/018-magic wand.png")}
                alt='letter icon'
              />
              Enchant
            </button>
            <button
              type='button'
              onClick={() => showTab("economy")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/024-tokens.png")}
                alt='letter icon'
              />
              Economy
            </button>
            <button
              type='button'
              onClick={() => showTab("npcs")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/016-wizard.png")}
                alt='letter icon'
              />
              NPCs
            </button>
            <button
              type='button'
              onClick={() => showTab("armour")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/002-armor.png")}
                alt='letter icon'
              />
              Armour
            </button>
            <button
              type='button'
              onClick={() => showTab("commands")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/007-controller.png")}
                alt='letter icon'
              />
              Commands
            </button>
            <button
              type='button'
              onClick={() => showTab("areas")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/019-treasure map.png")}
                alt='letter icon'
              />
              Areas
            </button>
            <button
              type='button'
              onClick={() => showTab("features")}
              class='tab-button'
            >
              <img
                class='game-icon'
                src={require("../images/game-icons/005-card.png")}
                alt='letter icon'
              />
              Features
            </button>
          </div>
          <hr />
          <div class='tab-panels-wrapper'>
            <div class='tab' id='rates'>
              <div class='tab-content'>
                <h2>Server Rates</h2>
                <div class='row'>
                  <p>Xp Rate</p>
                  <p>x100</p>
                </div>
                <div class='row'>
                  <p>Sp Rate</p>
                  <p>x100</p>
                </div>
                <div class='row'>
                  <p>Party Xp Rate</p>
                  <p>x200</p>
                </div>
                <div class='row'>
                  <p>Drop Rate</p>
                  <p>x1</p>
                </div>
                <div class='row'>
                  <p>Raid Drop Rate</p>
                  <p>x1</p>
                </div>
              </div>
            </div>
            <div class='tab' id='enchant'>
              <div class='tab-content'>
                <h2>Server Enchantment</h2>
                <div class='row'>
                  <p>Enchantment</p>
                  <p>+4 (Max +20)</p>
                </div>
                <div class='row'>
                  <p>Normal Scroll Success Rate</p>
                  <p>70%</p>
                </div>
                <div class='row'>
                  <p>Blessed Scroll Success rate</p>
                  <p>80%</p>
                </div>
                <div class='row'>
                  <p>Vote Scroll Success Rate</p>
                  <p>90%</p>
                </div>
                <div class='row'>
                  <p>Attributes Success Rate</p>
                  <p>75%</p>
                </div>
                <div class='row'>
                  <p>Crystal Attributes Success Rate</p>
                  <p>75%</p>
                </div>
              </div>
            </div>
            <div class='tab' id='economy'>
              <div class='tab-content'>
                <h2>Server Economy</h2>
                <div class='row'>
                  <p>Adena</p>
                </div>
                <div class='row'>
                  <p>Festival Adena</p>
                </div>
                <div class='row'>
                  <p>Vote Coins</p>
                </div>
                <div class='row'>
                  <p>Donation Coins</p>
                </div>
              </div>
            </div>
            <div class='tab' id='npcs'>
              <div class='tab-content'>
                <h2 class='tab-heading'>Custom Server NPCs</h2>
                <div class='tab-text'>
                  <div>
                    <div class='row'>
                      <p>Global Gatekeeper</p>
                    </div>
                    <div class='row'>
                      <p>Buffer with Character Profiles</p>
                    </div>
                    <div class='row'>
                      <p>Donation Shop</p>
                    </div>
                    <div class='row'>
                      <p>Nobless Manager</p>
                    </div>
                    <div class='row'>
                      <p>Grandboss Manager</p>
                    </div>
                  </div>
                  <div>
                    <div class='row'>
                      <p>GM Shop</p>
                    </div>
                    <div class='row'>
                      <p>Wedding Manager</p>
                    </div>
                    <div class='row'>
                      <p>Point Manager</p>
                    </div>
                    <div class='row'>
                      <p>Service Manager</p>
                    </div>
                    <div class='row'>
                      <p>Bug Report Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='tab' id='armour'>
              <div class='tab-content'>
                <h2>Top Armour & Jewels</h2>
                <div class='row'>
                  <p>Elegia Armour</p>
                </div>
                <div class='row'>
                  <p>Elegia Weapons</p>
                </div>
                <div class='row'>
                  <p>Boss Jewels / Top s84 Jewels</p>
                </div>
                <div class='row'>
                  <p>
                    <b>NO</b> Custom Items
                  </p>
                </div>
              </div>
            </div>
            <div class='tab' id='commands'>
              <div class='tab-content'>
                <h2>Custom Voice Commands</h2>
                <div class='tab-text'>
                  <div>
                    <div class='row'>
                      <p>.getmarried</p>
                    </div>
                    <div class='row'>
                      <p>.premium</p>
                    </div>
                    <div class='row'>
                      <p>.online</p>
                    </div>
                    <div class='row'>
                      <p>.register .unregister (events)</p>
                    </div>
                  </div>
                  <div>
                    <div class='row'>
                      <p>.withdraw .deposit</p>
                      <span>
                        <abbr title='1 billion Adena = 1 gold bar'>info</abbr>
                      </span>
                    </div>
                    <div class='row'>
                      <p>.giran, .dion, .goddard, etc.</p>
                      <span>
                        <abbr title='teleport back to town'>info</abbr>
                      </span>
                    </div>
                    <div class='row'>
                      <p>.enter, .return, .zone</p>
                      <span>
                        <abbr title='move to Chaotic Zone / PVP'>info</abbr>
                      </span>
                    </div>
                    <div class='row'>
                      <p>.getrewards</p>
                      <span>
                        <abbr
                          title='works only if you have voted for L2 Feronia
                        on all Top Sites'
                        >
                          info
                        </abbr>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='tab' id='areas'>
              <div class='tab-content'>
                <h2>Custom Areas</h2>
                <div class='description-item'>
                  <p>Chaotic Zone</p>
                  <i>
                    You can only enter using the voice commands. You will be
                    transferred to the Chaotic Zone with Flaged and Nobless
                    buff.
                  </i>
                </div>
                <div class='description-item'>
                  <p>Solo Farm Zone</p>
                  <i>
                    Area that will be beneficial to your in late-game. You will
                    find the most valuable items of L2 Feronia with an extremely
                    low drop rate.
                  </i>
                </div>
                <div class='description-item'>
                  <p>Party Farm Zone</p>
                  <i>
                    High drop rate area. Use it at your own risk and don't
                    forget to bring some friends.
                  </i>
                </div>
                <div class='description-item'>
                  <p>Hellbound</p>
                  <i>
                    For 80-82 level players. Here you can farm Adena, Festival
                    Adena and Stones for Attributes.
                  </i>
                </div>
              </div>
            </div>
            <div class='tab' id='features'>
              <div class='tab-content'>
                <h2>Additional Features</h2>
                <div class='row'>
                  <p>Functioning bosses and instances</p>
                </div>
                <div class='row'>
                  <p>Cancel-return debuff system (20 seconds)</p>
                </div>
                <div class='row'>
                  <p>PVP reward system / 5 Festival Adena per kill</p>
                </div>
                <div class='row'>
                  <p>More than 12 types of custom events</p>
                </div>
                <div class='row'>
                  <p>Custom community board</p>
                </div>
                <div class='row'>
                  <p>Premium accounts (get info using .premium in-game)</p>
                </div>
                <div class='row'>
                  <p>Top rank system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
