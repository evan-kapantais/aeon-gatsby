import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
const FeaturesPage = () => {
  return (
    <Layout>
      <SEO title='Features' />
      <header className='page-header'>
        <h1 className='page-title'>Features</h1>
      </header>
      <main className='features-main'>
        <div className='features-container'>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Rates</h2>
              <ul>
                <li>XP x100</li>
                <li>Adena x100</li>
                <li>SP x100</li>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Enchantments</h2>
              <ul>
                <li>Safe +3 / Max +12</li>
                <li>Normal Scrolls 50 % / Blessed Scrolls 55 %</li>
                <li>Attributes 50% / Crystals 30%</li>
                <li>Enchant Skills: Official Rates</li>
              </ul>
            </div>
          </section>
          <section className='deco'>
            <img
              src={require("../images/03.jpg")}
              alt='lineage 2 wallpaper'
              loading='lazy'
            />
          </section>
          <section className='deco'>
            <img
              src={require("../images/06.jpg")}
              alt='lineage 2 wallpaper'
              loading='lazy'
            />
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Buffs</h2>
              <ul>
                <li>
                  2h Buffs (Some Buffs and Dances from Classes have official
                  timetable)
                </li>
                <li>28 Buff Slots +5 Triggered Buffs</li>
                <li>12 Dance / Songs</li>
                <i className='note'>
                  <b>Warning:</b> We have excluded some buff skills from the
                  buffer and will be given only from specific classes. <br />
                  Example: Only BladeDancer will be giving Dance of berserker.
                  Not the server’s BufferBuffs <br /> Missing from global Buffer
                  : Dance of Berserker, Dance of Alignment, Song of Elemental,
                  Song of Purification, Counter Critical, Blazing Skin, Frozen
                  Skin and Combat Aura
                </i>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Features</h2>
              <ul>
                <li>100% working instances without any bugs </li>
                <li>
                  <b>Custom farm and XP</b> areas specifically design from the
                  player’s point of view
                </li>
                <li>
                  <b>Dress me Engine</b> system that will only be available to
                  those who are using the Vote Reward
                </li>
                <li>
                  <b>Achievement System Engine</b> with many rewards
                </li>
                <li>
                  More than 6 types of custom events Powered by Event Engine
                </li>
                <li>
                  A great variety of <b>Custom Npcs</b> That will help you
                  though out your journey
                </li>
                <li>
                  <b>Olympiad Every Week</b>
                </li>
                <li>
                  <b>Anti-Bot and Anti-Bot Enchant System</b>
                </li>
                <li>
                  <b>PvP Reward System</b>
                </li>
                <li>
                  <b>Flagzone Areas</b>
                </li>
                <li>
                  <b>Subclass Level 85</b>
                </li>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Commands</h2>
              <ul>
                <li>
                  <b>.dressme:</b> Dress me engine that will transform your
                  weapon and armour
                </li>
                <li>
                  <b>.deposit, .withdraw:</b> Bank system to obtain gold bars
                  from Adena and vice versa
                </li>
                <li>
                  <b>.getreward:</b> Vote to get exclusive rewards that will
                  boost your character and appearance
                </li>
                <li>
                  <b>.register, .unregister:</b> Commands that will give you the
                  opportunity to join L2 Aeon's events
                </li>
                <li>
                  <b>.giran, .dion:</b> Teleport back to safety with these
                  commands using town names
                </li>
                <li>
                  <b>.premium:</b> Learn everything about premium accounts
                </li>
                <li>
                  <b>.combinetalismans: </b> Combine talismans
                </li>
                <li>
                  <b>.ccp:</b> Control Character Panel
                </li>
                <li>
                  <b>.apon .apoff:</b> Enables auto potions
                </li>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Economy</h2>
              <ul>
                <li>Adena</li>
                <li>Festival Adena</li>
                <li>Vote Coins</li>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Grandbosses And Instances</h2>
              <p>
                All Grandbosses are spawned every 12 hoursEvery instance has its
                own unique features. Go to L2 Aeon’s Community board to learn
                more.
              </p>
            </div>
          </section>
          <section className='deco'>
            <img
              src={require("../images/02.jpg")}
              alt='forest with castle in the background'
              loading='lazy'
            />
          </section>
          <section className='deco'>
            <img
              src={require("../images/01.jpg")}
              alt='dark forest wallpaper'
              loading='lazy'
            />
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Olympiad</h2>
              <p>
                Heroes are Chosen every 1 week. Max enchant at Olympiad Games
                even if your items are enchanted over +6; Inside Olympiad they
                count as +6.
              </p>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Vote Rewards</h2>
              <ul>
                <li>
                  Custom XP 50 % Rune for 5 hours which also gives 10% to P.atk,
                  M.atk, P.def and M.def
                </li>
                <li>500 Festival Adena +500 with 30% chance</li>
                <li>
                  20 Vote reward Coins ( Vote coins are going to be the currency
                  for Dress me Engine)
                </li>
              </ul>
            </div>
          </section>
          <section className='feature'>
            <div>
              <h2 className='feature-heading'>Events</h2>
              <ul>
                <li>TFT</li>
                <li>CFT</li>
                <li>KOREAN</li>
                <li>LAST MAN STANDING</li>
                <li>Many More...</li>
              </ul>
              <i className='note'>
                <b>Note:</b> You enter events without any buffs. In order to
                have buffs you need to create separate scheme profiles from the
                event NPC located in Giran. L2 Aeon's scheme is not working
                while in an event.
              </i>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default FeaturesPage;
