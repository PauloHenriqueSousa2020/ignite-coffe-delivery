import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InputQuantity } from "@/components/InputQuantity";
import { coffees } from "../../data.json";
import * as S from "./styles";
export function Home() {

  return (
    <S.Container>
      <img src="/coffe-delivery-bg.svg" id="coffe-delivery-bg" />

      <S.MainContainer>
        <S.TextImageContainer>
          <S.TextContainer>
            <p>
              Encontre o café perfeito para qualquer hora do dia
            </p>
            <span>Com o Coffe Delivery você recebeu seu café onde estiver, a qualquer hora</span>

            <div className="infosContainer">
              <S.ShoppingInfoContainer coffeColors="yellowDark">
                <div>
                  <ShoppingCart weight="fill" />
                </div>
                <label>Compra simples e segura</label>
              </S.ShoppingInfoContainer>
              <S.ShoppingInfoContainer coffeColors="baseText">
                <div>
                  <Package weight="fill" />
                </div>
                <label>Embalagem mantém o café intacto</label>
              </S.ShoppingInfoContainer>
              <S.ShoppingInfoContainer coffeColors="yellow">
                <div>
                  <Timer weight="fill" />
                </div>
                <label>Entrega rápida e rastreada</label>
              </S.ShoppingInfoContainer>
              <S.ShoppingInfoContainer coffeColors="purple">
                <div>
                  <Coffee weight="fill" />
                </div>
                <label>O café chega fresquinho até você</label>
              </S.ShoppingInfoContainer>
            </div>
          </S.TextContainer>
          <img src="/coffe-delivery-icon.svg" />
        </S.TextImageContainer>
      </S.MainContainer>

      <S.CoffeListContainer>
        <p className="title">Nossos cafés</p>

        <div className="coffeList">
          {coffees.map(coffe => (
            <S.CoffeCard key={coffe.id}>
              <img src={coffe.image} />

              <div className="tags">
                {coffe.tags.map(tag => (
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
                    <ShoppingCart size={18} weight="fill" />
                  </button>
                </div>
              </div>
            </S.CoffeCard>
          ))}
        </div>

      </S.CoffeListContainer>
    </S.Container>
  )
}