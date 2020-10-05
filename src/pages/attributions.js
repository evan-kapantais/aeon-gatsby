import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./attributions.scss";

const attributions = () => {
  return (
    <Layout title='Attributions'>
      <SEO title='attributions' />
      <section id='attributions'>
        <div className='container'>
          <h2>Media Attributions</h2>
          <h3>Social Media Icons</h3>
          <p>
            <a
              href='https://www.flaticon.com/authors/pixel-perfect'
              title='Pixel perfect'
            >
              Pixel perfect
            </a>
            from
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </p>
          <h3>Images</h3>
          <p>
            <a href='https://wall.alphacoders.com/by_sub_category.php?id=169917&name=Lineage+Wallpapers'>
              Wallpaper Abyss
            </a>
          </p>
          <p>
            <a href='https://wallpaperaccess.com/lineage'>Wallpaper Access</a>
          </p>
          <h3>Server Features Icons</h3>
          <p>
            <a href='https://www.flaticon.com/authors/ddara' title='dDara'>
              dDara
            </a>{" "}
            from{" "}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default attributions;
