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
        <div className='page-container connect-container'>
          <ul>
            <li>
              <div>
                1. Download the Lineage II High Five client{" "}
                <a className='text-link' href='#'>
                  here
                </a>
                .
              </div>
            </li>
            <li>
              <div>
                2. Extract the client in <code>C:\Program Files\Lineage 2</code>
                .
              </div>
            </li>
            <li>
              <div>
                3. Download the L2 Aeon system patch{" "}
                <a className='text-link' href='#'>
                  here
                </a>
                .
              </div>
            </li>
            <li>
              <div>
                4. Extract and replace <code>system</code> inside the Lineage 2
                folder (same path).
              </div>
            </li>
            <li>
              <div>
                5. Go to{" "}
                <a className='text-link' href='https://l2aeon.com/acm/'>
                  L2 Aeon's control panel
                </a>{" "}
                and register your account.
              </div>
            </li>
            <li>
              <div>6. Confirm your account.</div>
            </li>
            <li>
              <div>
                7. Run <code>l2.exe</code> located inside the system folder.
              </div>
            </li>
            <li>
              <div>8. Login to L2 Aeon.</div>
            </li>
            <li>
              <div>9. Enjoy!</div>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default ConnectPage;
