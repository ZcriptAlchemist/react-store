import React from "react";
import Item from "./Item.jsx";
import itemsData from "../util/itemsData";

const Home = () => {
  return (
    <div className="home">
      <div className="all-items-div">
        {itemsData.map((item) => {
          const { image, name, gen, flag, price } = item;
          return (
            <Item
              key={name}
              image={image}
              name={name}
              gen={gen}
              flag={flag}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
