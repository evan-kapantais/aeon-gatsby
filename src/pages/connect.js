import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./connect.scss"

const connect = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <section id="how-to-connect">
        <div class="container">
          <h2>How To Connect</h2>
          <hr />
          <ul class="connect-instructions">
            <li>
              Download the Lineage II HI5 Client{" "}
              <a
                class="inline-link"
                href="http://www.mediafire.com/file/zp6cubhtt870l5i/file"
              >
                here
              </a>
              .
            </li>
            <li>
              Extract the client into <code>C:\Program Files</code>.
            </li>
            <li>
              Download the L2 Feronia system patch{" "}
              <a
                class="inline-link"
                href="http://www.mediafire.com/file/gq2s60kd18lfxib/file"
              >
                here
              </a>
              .
            </li>
            <li>
              Extract and replace <code>system</code> in the Lineage II Folder (
              <code>C:\Program Files\Lineage II</code>).
            </li>
            <li>
              Run <code>l2.exe</code> located inside the game folder at{" "}
              <code>C:\Program Files\Lineage II\system\l2.exe</code>.
            </li>
            <li>The accounts are created automatically.</li>
            <li>
              Click the <code>Confirm</code> button.
            </li>
          </ul>
          <p class="note">
            <i>
              Note: In some cases, you might have to disable your firewall in
              order to download the files or run l2.exe.
            </i>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default connect
