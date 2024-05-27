import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { coffees } from "../../data.json";
import { CoffeCard } from "@/components/CoffeCard";
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
            <span>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</span>

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
            <CoffeCard coffe={coffe} key={coffe.id} />
          ))}
        </div>
      </S.CoffeListContainer>
    </S.Container>
  )
}