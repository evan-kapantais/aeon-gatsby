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
          <section className='feature feature-1'>
            <h2 className='feature-heading'>Rates</h2>
            <ul>
              <li>
                <span role='img' aria-label='list item icon'>
                  ⚔️
                </span>
                {` `}
                XP x100
              </li>
              <li>
                <span role='img' aria-label='list item icon'>
                  ⚔️
                </span>
                {` `}
                Adena x100
              </li>
              <li>
                <span role='img' aria-label='list item icon'>
                  ⚔️
                </span>
                {` `}
                SP x100
              </li>
            </ul>
          </section>
          <section className='feature feature-2'>
            <h2 className='feature-heading'>Enchantments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nostrum dolorem excepturi ab perspiciatis quam dicta animi labore
              amet placeat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              commodi dolor praesentium veniam ducimus, earum, laborum
              perspiciatis nesciunt dolorum sed fuga? Odio neque tenetur commodi
              suscipit sunt deserunt eius reiciendis tempore nam vero, aliquid
              assumenda maiores, molestias totam dicta fugit.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default FeaturesPage;
