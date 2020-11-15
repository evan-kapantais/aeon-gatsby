import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const RulesPage = () => {
  return (
    <Layout>
      <SEO title='Server Rules' />
      <header className='page-header'>
        <h1 className='page-title'>Server Rules</h1>
      </header>
      <main className='about-main'>
        <section>
          <article>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  ⌨️
                </span>{" "}
                Third-party programs
              </h2>
              <p>
                Needless to say that the use of any third party programs,
                especially hacking and bot programs that alter the normal use
                and enjoyment of the game will lead to permanent banning. It
                does not matter whether the software was being used in our
                server or somewhere else, if any forbidden software is detected
                in the computer while playing in our server, the account will be
                inevitably banned.
              </p>
              <p>
                The usage of virtual machines, remote desktop applications,
                multiple computers, etc. to attempt to bypass launcher, control
                more than one character, as well as any attempt to bypass
                official L2Aeon launcher is strictly forbidden and will lead to
                the permanent ban of all the accounts involved.
              </p>
              <p>
                Furthermore, ANY mechanism (including macro /nexttarget
                combinations, programmable keyboards/mouse, shortcut macro
                recording software etc.) that allows you to farm in an automated
                manner (ie. killing mobs while player is away from keyboard), or
                any kind of interaction with the game is strictly forbidden and
                will lead to the permanent ban of the account. A character can’t
                earn experience if the user is not playing.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  👩‍💻
                </span>{" "}
                Account Use
              </h2>
              <p>
                There should also be a special mention about the importance of
                not leaving your account to anyone. Do it at your own risk but
                you are ultimately responsible of what happens to the account.
                This means that if anyone logs in your account with any illegal
                software the account will be banned. Needless to say that the
                staff will not get involved if one day you find your character
                naked because you trusted the wrong person.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🐛
                </span>{" "}
                Bug Exploitation
              </h2>
              <p>
                Taking deliberate advantage of a bug instead of reporting it
                will be punished and can lead to permanent ban at our own
                discretion.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🖥
                </span>{" "}
                Self-Advertisement
              </h2>
              <p>
                SPAM of other servers in forum/discord/in-game will lead to
                permanent ban of in-game account.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  💸
                </span>{" "}
                Adena Selling
              </h2>
              <p>
                Adena sellers are not allowed on this server. Selling/Buying
                anything (adena, items, characters, etc.) for real money is
                strictly forbidden and will lead to permanent ban of{" "}
                <b>both seller and buyer</b> accounts.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  👫
                </span>{" "}
                Respect
              </h2>
              <p>
                The respect to other players, as to the gm/admins is vital and
                is taken for granted. This server is to play and to have fun and
                enjoy, whether with farming or pvp, everyone has to find their
                place without disrespecting anyone. There will be penalties for
                users who don’t respect this, serious or repeated faults may
                lead to temporary or permanent banning of an account. Characters
                with names with insults included will be deleted and is expected
                a minimum attitude of users in discord and forum also can not
                attach photos uploaded tone / pornography.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  📛
                </span>{" "}
                Character Naming Restrictions
              </h2>
              <p>
                In such a way it is forbidden to create characters with the
                letters GM included in the name, these characters will be
                deleted because there can be no doubt who is GM and who is not.
              </p>
            </section>
            <section>
              <h2>
                <span role='img' aria-label='Header Emoji'>
                  🏞
                </span>{" "}
                Language
              </h2>
              <p>
                Last but not least, only English is allowed in the global chat.
              </p>
            </section>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default RulesPage;
