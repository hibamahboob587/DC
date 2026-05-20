import { useState } from "react";
import "../Style/home.css";

interface Props {
  name: string;
  price: number;
  imgsrc: string;
  category: string;
}

const Card = ({ name, price, imgsrc, category }: Props) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="manga-card">
      <div className="manga-card-img-wrap">
        {imgsrc && !imgFailed ? (
          <img src={imgsrc} alt={name} onError={() => setImgFailed(true)} />
        ) : (
          <div className="no-image">NO IMAGE AVAILABLE</div>
        )}
        <span className="manga-price-badge">${price}</span>
      </div>
      <div className="manga-card-info">
        <h4 className="manga-card-title">{name}</h4>
        <p className="manga-card-category">{category}</p>
      </div>
    </div>
  );
};

export default Card;
