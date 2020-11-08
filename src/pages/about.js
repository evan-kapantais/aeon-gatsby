import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About' />
      <header className='page-header'>
        <h1 className='page-title'>About Us</h1>
      </header>
      <main className='about-main'>
        <section>
          <article>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  ⚔️
                </span>{" "}
                About L2 Aeon
              </h2>
              <p>
                L2 Aeon is a new project made by Lineage 2 Players. The last 3
                months we did our best to develop a java pack with great
                stability, many custom features (no custom items), balance
                classes and stable economy.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  ⛰
                </span>{" "}
                Our Goals
              </h2>
              <p>
                Our goal is to retain the original approach of Lineage 2. To
                clarify our statement, L2 Aeon is going to focus on the needs of
                the community, constant fixes and updates, without wipes, great
                lifespan and continuous GM support. Our team is going to be
                available 24/7 without any discrimination between donate players
                and normal players.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  ⌨️
                </span>{" "}
                Your Server
              </h2>
              <p>
                Over the past years I have seen tens of hundreds of private
                servers closing and re-opening. We are not going to follow this
                tactic as we do not want to lose the trust of lineage 2
                community. So, we made a promise that no matter the cost the
                server will stay online and continue to be developed day after
                day. We are not going to stop improving your game experience and
                support L2 Aeon’s community needs.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  💵
                </span>{" "}
                Donate Friendly
              </h2>
              <p>
                We are a team of hardcore Lineage 2 players and our focus is to
                have fun. One of the greatest things in life. As a result, we
                are not doing it for the money. On the contrary, we have
                invested a good amount of money from our everyday jobs so that
                we can have fun and tones of PvP.
              </p>
              <p>
                In addition, people who donate are going to be equal to those
                that do not want to support the server by this means. To be more
                specific, donators are not going to have stronger equipment
                neither special treatment. They will just achieve the end game
                faster.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🤲
                </span>{" "}
                Respect For The Server
              </h2>
              <p>
                One of the main reasons Private servers are closing is the
                Respect the community is giving to the rules. Thus, we are going
                to be very strict with our set rules. We are not going to
                tolerate any behavior that is toxic toward L2 aeon’s community
                and Lineage 2 in general. By saying that we mean,{` `}
                <b>no flaming and no bots or exploits of any kind</b>. L2 Aeon’s
                Team will give permanent bans to those who develop such
                behaviors. We do not care whether we have 50 ppl online as long
                as those players are respecting the rules and enjoying
                themselves while playing.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🚜
                </span>{" "}
                Farm Friendly
              </h2>
              <p>
                So here we are, growing older yet constantly feeling younger in
                our minds. We do not have time for constant farm. L2 Aeon’s team
                took care of that. We want your farm to mean something and have
                immediate effect on your gameplay. This means that you will
                never feel that you’re left behind even if your character has
                not logged in for a week.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🏠
                </span>{" "}
                Old School Approach
              </h2>
              <p>
                L2 Aeon is based on High Five client. We wanted to keep things
                as simple as possible by keeping a classic gameplay but also
                adding custom features that fit to a better and more modern
                approach of Private l2 Server Community. You are not going to
                see custom items, custom spawns, starting level 85 with full
                jewels etc. Your path will start with your character at starting
                areas and you will play your way to the top. A guide will be
                available in our Forums.
              </p>
            </section>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
