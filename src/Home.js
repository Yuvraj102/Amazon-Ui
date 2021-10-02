import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="header__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/engagement/newsletter/2018/Mar18/640X250.jpg"
        />
        <div className="home__row">
          <Product
            id="123454423"
            title="The Lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
            rating={5}
          />
          <Product
            id="1234534352"
            title="Head radical Jr"
            price={80.85}
            image="https://m.media-amazon.com/images/I/61SiM6EswtL._SL1200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234534352"
            title="Logitech wireless keyboard"
            price={25.56}
            image="https://resource.logitech.com/w_420,h_420,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk295-keyboard-mouse-combo/gallery/mk295-graphite-gallery-01.png?v=1"
            rating={5}
          />
          <Product
            id="1234593284"
            title="J&J originals"
            price={10.91}
            image="https://img.kytary.com/eshop_ie/velky_v2/na/637329305368200000/9281568c/64771937/ant-tshirt-ant-blu-m.jpg"
            rating={2}
          />
          <Product
            id="1234534945"
            title="TREK exclusive"
            price={200.99}
            image="https://trek.scene7.com/is/image/TrekBicycleProducts/Slash8GX_21_32993_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6457689552"
            title="Think like a Monk"
            price={4.0}
            image="https://skillsify.in/wp-content/uploads/2020/10/page_1.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
