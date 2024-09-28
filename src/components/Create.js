import React, { useState } from "react";
import Pink from "./images/pink.png";
import Green from "./images/green.png";
import WhitePink from "./images/white pink.png";
import Yellow from "./images/yellow.png";
import Violet from "./images/violet.png";
import Red from "./images/red.png";
import White from "./images/white.png";
import Source from "./Source";

function Create() {
  const [view, setView] = useState({
    imagesColorViews: 0,
    color: 0,
  });
  const [price, setPrice] = useState({
    prices: Source.price[0],
  });
  const imagesColor = {
    images: [
      { imgColor: Pink, colorView: "Pink" },
      { imgColor: Green, colorView: "Green" },
      { imgColor: WhitePink, colorView: "White Pink" },
      { imgColor: Yellow, colorView: "Yellow" },
      { imgColor: Violet, colorView: "Violet" },
      { imgColor: Red, colorView: "Red" },
      { imgColor: White, colorView: "White" },
    ],
  };
  const imagePreview = imagesColor.images;

  function handleClick(pos) {
    setView((prev) => ({
      ...prev,
      imagesColorViews: pos,
      color: pos,
    }));
    setPrice((prev) => ({
      ...prev,
      prices: Source.price[pos],
    }));
  }
  let shipping = 0;
  if (price.prices >= 150) {
    shipping = 59.99;
  } else {
    shipping = 49.99;
  }

  const total = shipping + price.prices;

  const imagesColorView = imagesColor.images.map((colors, pos) => {
    return (
      <div key={pos}>
        <img
          src={colors.imgColor}
          alt={colors.colorView}
          onClick={() => handleClick(pos)}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="preview-container">
        <img src={imagePreview[view.imagesColorViews].imgColor} />
      </div>
      <div className="details-container">
        <div className="title-container">
          <h2 className="text-detail">{Source.title}</h2>
        </div>
        <div>
          <h3 className="payment text-detail">
            Price: <span className="price">{`$${price.prices}`}</span>
          </h3>
          <h3 className="text-detail">
            Shipping: <span className="price">{`$${shipping}`}</span>
          </h3>
          <h3 className="text-detail">
            Total: <span className="price">{"$" + total.toFixed(2)}</span>
          </h3>
        </div>

        <h5 className="text-detail">
          Color Options:{" "}
          <span style={{ fontSize: "1rem" }}>
            {imagePreview[view.color].colorView}
          </span>
        </h5>
        <div className="color-container">{imagesColorView}</div>
        <div className="btn">
          <button className="buy">Buy</button>
        </div>
      </div>
    </div>
  );
}
export default Create;
