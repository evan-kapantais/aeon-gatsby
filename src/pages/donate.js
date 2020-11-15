import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const DonatePage = () => {
  return (
    <Layout>
      <SEO title='How To Donate' />
      <header className='page-header'>
        <h1 className='page-title'>How To Donate</h1>
      </header>
      <main className='connect-main'>
        <div className='page-container connect-container'>
          <ul className='normal-list'>
            <li>
              <div className='list-item-number'>1</div>
              <p className='list-item-text'>
                Log in to your game account at{` `}
                <a className='text-link' href='https://l2aeon.com/acm'>
                  https://l2aeon.com/acm
                </a>
                .
              </p>
            </li>
            <li>
              <div className='list-item-number'>2</div>
              <div>
                Click the <code>Add</code> button at the top left to add credit
                to your account.
                <i className='note'>
                  <b>Note:</b> We only support Paypal at the moment. For any
                  other payment method, please contact the Aeon team on Discord,
                  or{" "}
                  <a className='text-link' href='mailto:info@l2aeon.com'>
                    send us an email
                  </a>
                  .
                </i>
              </div>
            </li>
            <li>
              <div className='list-item-number'>3</div>
              <div>Choose a credit amount.</div>
            </li>
            <li>
              <div className='list-item-number'>4</div>
              <div>
                Click <code>Transfer</code> and choose which character will
                receive the Donation Coins.
                <i className='note'>
                  <b>Important Note:</b> For security reasons our system will
                  only deliver Donation Coins if your character is offline at
                  the time the payment is approved. Worry not, though; If your
                  character is online at the time of delivery, a new delivery
                  attempt will be made automatically every one hour until your
                  character is offline.
                </i>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default DonatePage;
