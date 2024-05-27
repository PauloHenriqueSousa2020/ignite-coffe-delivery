import { useEffect, useState } from "react";

import { ShoppingCart, Check } from "phosphor-react";
import { InputQuantity } from "../InputQuantity";
import { CoffeProps } from "@/@types/CoffeInterface";

import { useContext } from "react";
import { CoffeContext } from "@/context/CoffeContext";

import * as S from "./styles";

interface CoffeCardProps {
  coffe: CoffeProps
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const [quantity, setQuantity] = useState(0);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { handleAddCoffe } = useContext(CoffeContext);


  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = window.setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  function handleIncrementValue() {
    setQuantity(quantity + 1)
  }

  function handleDecrementValue() {
    setQuantity(quantity === 0 ? 0 : quantity - 1)
  }

  function handleAddNewCoffe() {
    handleAddCoffe(coffe, quantity);
    setIsItemAdded(true);
    setQuantity(0);
  }

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

          <InputQuantity
            value={quantity}
            handleDecrementValue={handleDecrementValue}
            handleIncrementValue={handleIncrementValue}
          />

          {isItemAdded ? (
            <button className="checkCartButton">
              <Check
                weight="fill"
                size={22}
              />
            </button>
          ) : (
            <button disabled={quantity === 0} onClick={handleAddNewCoffe} className="shoppingCartButton">
              <ShoppingCart size={22} />
            </button>
          )}

        </div>
      </div>
    </S.CoffeCard>
  )
}