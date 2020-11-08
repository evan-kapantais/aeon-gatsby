import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
const ConnectPage = () => {
  return (
    <Layout>
      <SEO title='How to Connect' />
      <header className='page-header'>
        <h1 className='page-title'>How To Connect</h1>
      </header>
      <main className='connect-main'>
        <div className='page-container'>
          <section>
            <h2>Instructions (Windows)</h2>
            <ul>
              <li>
                Download the Lineage II High Five client{" "}
                <a className='text-link' href='#'>
                  here
                </a>
                .
              </li>
              <li>
                Extract the client in <code>C:\Program Files\Lineage 2</code>.
              </li>
              <li>
                Download the L2 Aeon system patch{" "}
                <a className='text-link' href='#'>
                  here
                </a>
                .
              </li>
              <li>
                Extract and replace <code>system</code> inside the Lineage 2
                folder (same path).
              </li>
              <li>
                Go to{" "}
                <a className='text-link' href='https://l2aeon.com/acm/'>
                  L2 Aeon's control panel
                </a>{" "}
                and register your account.
              </li>
              <li>Confirm your account.</li>
              <li>
                Run <code>l2.exe</code> located inside the system folder.
              </li>
              <li>Login to L2 Aeon.</li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default ConnectPage;
