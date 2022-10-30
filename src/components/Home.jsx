import React from "react";
import Cart from "./Cart.jsx";

const Home = () => {
  // items-DB
  const itemsData = {
    f22: {
      name: "Lockheed Martin F22 RAPTOR",
      image: "https://images3.alphacoders.com/207/207679.jpg",
      gen: "5th Generation Fighter",
      flag: "🇺🇸",
      price: "$120 million",
    },
    su57: {
      name: "Sukhoi Su-57 Felon",
      image: "https://images7.alphacoders.com/105/thumbbig-1052767.webp",
      gen: "5th Generation Fighter",
      flag: "🇷🇺",
      price: "$40 million",
    },
    typhoon: {
      name: "Eurofighter Typhoon",
      image: "https://wallpapercave.com/dwp1x/GrprgnG.jpg",
      gen: "4.5th Generation Fighter",
      flag: "🇪🇺",
      price: "$117 million",
    },
    tejas: {
      name: "HAL Tejas",
      image: "https://wallpaperaccess.com/full/2202148.jpg",
      gen: "4.5th Generation Fighter",
      flag: "🇮🇳",
      price: "$42 million",
    },
    rafale: {
      name: "Dassault Rafale",
      image:
        "https://c4.wallpaperflare.com/wallpaper/877/203/647/jet-fighters-dassault-rafale-wallpaper-preview.jpg",
      gen: "4.5th Generation Fighter",
      flag: "🇫🇷",
      price: "$115 million",
    },
    j20: {
      name: "Chengdu J-20 Mighty Dragon",
      image: "https://wallpaperaccess.com/full/5318252.jpg",
      gen: "5th Generation Fighter",
      flag: "🇨🇳",
      price: "$100 million",
    },
  };

  //   add button handler

  let addHandler = (image, name, gen, flag, price) => {
    console.log(image, name, gen, flag, price);
    console.log(name);
    <Cart image={image} name={name} gen={gen} flag={flag} price={price} />;
  };

  return (
    <div className="home">
      <div className="all-items-div">
        <div className="first row-div">
          <div className="item">
            <img
              className="item-image"
              src={itemsData.f22.image}
              alt="product-1"
            />
            <h2>{itemsData.f22.name}</h2>
            <p>{itemsData.f22.gen}</p>
            <p className="flags">{itemsData.f22.flag}</p>
            <p>{itemsData.f22.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.f22.image,
                  itemsData.f22.name,
                  itemsData.f22.gen,
                  itemsData.f22.flag,
                  itemsData.f22.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
          <div className="item">
            <img
              className="item-image"
              src={itemsData.su57.image}
              alt="product-2"
            />
            <h2>{itemsData.su57.name}</h2>
            <p>{itemsData.su57.gen}</p>
            <p className="flags">{itemsData.su57.flag}</p>
            <p>{itemsData.su57.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.su57.image,
                  itemsData.su57.name,
                  itemsData.su57.gen,
                  itemsData.su57.flag,
                  itemsData.su57.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="second row-div">
          <div className="item">
            <img
              className="item-image"
              src={itemsData.typhoon.image}
              alt="product-3"
            />
            <h2>{itemsData.typhoon.name}</h2>
            <p>{itemsData.typhoon.gen}</p>
            <p className="flags">{itemsData.typhoon.flag}</p>
            <p>{itemsData.typhoon.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.typhoon.image,
                  itemsData.typhoon.name,
                  itemsData.typhoon.gen,
                  itemsData.typhoon.flag,
                  itemsData.typhoon.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
          <div className="item">
            <img
              className="item-image"
              src={itemsData.tejas.image}
              alt="product-4"
            />
            <h2>{itemsData.tejas.name}</h2>
            <p>{itemsData.tejas.gen}</p>
            <p className="flags">{itemsData.tejas.flag}</p>
            <p>{itemsData.tejas.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.tejas.image,
                  itemsData.tejas.name,
                  itemsData.tejas.gen,
                  itemsData.tejas.flag,
                  itemsData.tejas.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="third row-div">
          <div className="item">
            <img
              className="item-image"
              src={itemsData.rafale.image}
              alt="product-5"
            />
            <h2>{itemsData.rafale.name}</h2>
            <p>{itemsData.rafale.gen}</p>
            <p className="flags">{itemsData.rafale.flag}</p>
            <p>{itemsData.rafale.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.rafale.image,
                  itemsData.rafale.name,
                  itemsData.rafale.gen,
                  itemsData.rafale.flag,
                  itemsData.rafale.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
          <div className="item">
            <img
              className="item-image"
              src={itemsData.j20.image}
              alt="product-6"
            />
            <h2>{itemsData.j20.name}</h2>
            <p>{itemsData.j20.gen}</p>
            <p className="flags">{itemsData.j20.flag}</p>
            <p>{itemsData.j20.price}</p>
            <button
              onClick={() =>
                addHandler(
                  itemsData.j20.image,
                  itemsData.j20.name,
                  itemsData.j20.gen,
                  itemsData.j20.flag,
                  itemsData.j20.price
                )
              }
              className="item-btn"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
