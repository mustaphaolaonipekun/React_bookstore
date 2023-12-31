import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { useState } from "react";

//the use state can be used to track state in our function component
// we can change our state like (onClick, onMouseClick, onPause)
// function Title() {
//   const Random = () => {
//     SetTitle("Random Title");
//   };

//   const [title, SetTitle] = useState("This is a title");
//   return (
//     <>
//       <h4> This is a {title} </h4>
//       <button type="btn" className="btn" onClick={Random}>
//         change Title
//       </button>
//     </>
//   );
// }

// ReactDOM.render(<Title />, document.getElementById("root"));

function BookStore() {
  return (
    <main className="bookstore">
      <Header />
      <Realase />
      <Top />
      <Seller />
      <Recom />
      <Sellers />
      <News />
      <Purchase />
      <Shop />
      <Footer />
    </main>
  );
}
const Header = () => {
  return (
    <header className="header">
      <div className="heads">
        <i className="bx bx-menu"></i>
        <input
          className="search"
          type="search"
          placeholder="what are you looking for?"></input>
      </div>
      <div className="heads">
        <i className="bx bx-user"></i>
        <i className="bx bx-heart"></i>
        <h4 id="basket">
          <i className="bx bx-cart"></i>
          <h3>Basket</h3>
        </h4>
      </div>
    </header>
  );
};

const Realase = () => {
  return (
    <section className="release" id="release">
      <div className="text">
        <h2 className="new">New Releases This Week </h2>
        <h5>
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </h5>
        <h3 className="subs">
          <h3>Subscribe</h3>
        </h3>
      </div>
      <div className="image">
        <img src="./images/a.png" alt="" className="img1"></img>
        <img src="./images/b.png" alt="" className="img2"></img>
        <img src="./images/c.png" alt="" className="img3"></img>
      </div>
    </section>
  );
};

const Top = () => {
  return (
    <section className="top">
      <div className="">
        <h3>Top Sellers</h3>
      </div>
      <div className="genre">
        <h4>
          Choose a genre <i className="fas fa-user"></i>
        </h4>
      </div>
    </section>
  );
};

const Seller = () => {
  return (
    <div className="sells">
      <div className="get">
        <img src="./images/a.png" alt="" className="img"></img>
        <div className="buy">
            <h4>I want a better ..</h4>
          <p>A woman goes head-to-head with the...</p>
          <div className="pay">
            <h4>$ 21.50</h4>
            <h5>29.75</h5>
          </div>
          <div className="subscribe">
            <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>
      <div className="get">
        <img src="./images/d.png" alt="" className="img"></img>
        <div className="buy">
          <h4>the midnight Library</h4>
          <p>Lindbergh's Pharmacy is an Athens and also...</p>
          <div className="pay">
            <h4>$ 10.50</h4>
            <h5>15.75</h5>
          </div>
          <div className="subscribe">
            <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>

      <div className="get">
        <img src="./images/c.png" alt="" className="img"></img>
        <div className="buy">
          <h4>The time has come </h4>
          <p>the time to shine in the star dulging all times...</p>
          <div className="pay">
            <h4>$ 30.99</h4>
            <h5>$ 27.89</h5>
          </div>
          <div className="subscribe">
            <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
const Recom = () => {
  return (
    <section className="top">
      <div className="">
        <h3>Recommended for you</h3>
      </div>
    </section>
  );
};
const Sellers = () => {
  return (
    <div className="sells">
      <div className="get">
        <img src="./images/e.png" alt="" className="img"></img>
        <div className="buy">
          <h4>The Government wants ...</h4>
          <p>The Government of a country is aristocrat...</p>
          <div className="pay">
            <h4>$ 14.50</h4>
            <h5>19.75</h5>
          </div>
          <div className="subscribe">
          <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>
      <div className="get">
        <img src="./images/h.png" alt="" className="img"></img>
        <div className="buy">
          <h4>Pride and Protest</h4>
          <p>A woman goes head-to-head with the CEO...</p>
          <div className="pay">
            <h4>$ 14.50</h4>
            <h5>19.75</h5>
          </div>
          <div className="subscribe">
          <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>
      <div className="get">
        <img src="./images/b.png" alt="" className="img"></img>
        <div className="buy">
          <h4>Find a sponsor</h4>
          <p>to find a sponsor through the highs and lows...</p>
          <div className="pay">
            <h4>$ 14.50</h4>
            <h5>19.75</h5>
          </div>
          <div className="subscribe">
          <i className="bx bx-cart"></i>
            <h3>Add to basket</h3>
          </div>
        </div>
      </div>

    
    </div>
  );
};
const News = () => {
  return (
    <section className="top">
      <div className="">
        <h3>News</h3>
      </div>
    </section>
  );
};

const Purchase = () => {
  return (
    <section>
      <div className="news">
        <div className="new">
          <h3>The Books You Need to Read in 2023</h3>
          <p>
            This is the blog we know you've all been waiting for. We present the
            top 10 titles for 2023 in fiction, non-fiction and children's books;
            a glorious mix of masterful storytelling, compelling subject matter
            and page-turning thrills...
          </p>
        </div>
        <img src="./images/f.png" alt=""></img>
        <div className="new">
          <h3>The Books You Need to Read in 2023</h3>
          <p>
            Some of the finest children's authors currently writing have books
            publishing this month, from Natasha Farrant to Elle McNicoll and
            from Tahereh Mafi to Harriet Muncaster. Across all areas and age
            ranges there are plenty of fantastic titles...
          </p>
        </div>
        <img src="./images/g.png" alt=""></img>
      </div>
    </section>
  );
};
const Shop = () => {
  return (
    <section className="shops">
      <div className="shop">
        <img src="./images/logo.png" alt=""></img>
        <div className="menus">
          <h6>
            <a href="#release">About</a>
          </h6>
          <h6>
            <a href="#release">Features</a>
          </h6>
          <h6>
            <a href="#release">Pricing</a>
          </h6>
          <h6>
            <a href="#release">Gallery</a>
          </h6>
          <h6>
            <a href="#release">Team</a>
          </h6>
        </div>
      </div>
      <div className="shop">
        <h4>
          Subscribe to stay tuned for new product and latest updates. Let's do
          it!
        </h4>
        <div className="mails">
          <div className="mail">
            <div className="email">
              {" "}
              <h4>Enter your email address</h4>
            </div>
            <div className="sub">
              <h3>Subscribe</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <section className="foot">
      <div className="menus">
        <h6>
          <a href="#release">Privacy Policy</a>
        </h6>
        <h6>
          <a href="#release">Terms of use</a>
        </h6>
        <h6>
          <a href="#release">Sales and Refunds</a>
        </h6>
        <h6>
          <a href="#release">Legal</a>
        </h6>
      </div>
    </section>
  );
};
ReactDOM.render(<BookStore />, document.getElementById("root"));

