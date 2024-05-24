
import { ShoppingCart } from "phosphor-react";
import { InputQuantity } from "../InputQuantity";

import * as S from "./styles";

interface CoffeCardProps {
  coffe: {
    id: string,
    tags: string[],
    image: string,
    title: string,
    description: string,
    price: number,
  }
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  return (
    <S.CoffeCard key={coffe.id}>
      <img src={coffe.image} />

      <div className="tags">
        {coffe.tags.map((tag: string) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <p className="coffeTitle">{coffe.title}</p>

      <span className="coffeDescription">
        {coffe.description}
      </span>

      <div className="coffePriceContainer">
        <div className="priceWrapper">
          <span className="cipher">R$ </span>
          <span className="price">{coffe.price.toFixed(2)}</span>
        </div>
        <div className="coffePriceShopping">

          <InputQuantity />
          <button className="shoppingCartButton">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </S.CoffeCard>
  )
}