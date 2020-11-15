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
          <ul className='normal-list'>
            <li>
              <div className='list-item-number'>1</div>
              <div>
                Download the Lineage II High Five client{" "}
                <a
                  className='text-link'
                  href='http://www.mediafire.com/file/zp6cubhtt870l5i/Lineage_II.rar/file'
                >
                  here
                </a>
                .
              </div>
            </li>
            <li>
              <div className='list-item-number'>2</div>
              <div>
                Extract the client in <code>C:\Program Files\Lineage 2</code>.
              </div>
            </li>
            <li>
              <div className='list-item-number'>3</div>
              <div>
                Download the L2 Aeon system patch{" "}
                <a
                  className='text-link'
                  href='http://www.mediafire.com/file/9wi2e1adm2kcy9g/Aeon_Patch.zip/file'
                >
                  here
                </a>
                .
              </div>
            </li>
            <li>
              <div className='list-item-number'>4</div>
              <div>
                Extract and replace <code>system</code> inside the Lineage 2
                folder (same path).
              </div>
            </li>
            <li>
              <div className='list-item-number'>5</div>
              <div>
                Go to{" "}
                <a className='text-link' href='https://l2aeon.com/acm/'>
                  L2 Aeon's control panel
                </a>{" "}
                and register your account.
              </div>
            </li>
            <li>
              <div className='list-item-number'>6</div>
              <div>Confirm your account.</div>
            </li>
            <li>
              <div className='list-item-number'>7</div>
              <div>
                Run <code>l2.exe</code> located inside the system folder.
              </div>
            </li>
            <li>
              <div className='list-item-number'>8</div>
              <div>Login to L2 Aeon.</div>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default ConnectPage;
