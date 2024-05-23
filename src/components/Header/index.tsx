import { MapPin, ShoppingCart } from "phosphor-react";

import * as S from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  const cart = null
  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src="/public/logo.svg" alt="Imagem de um copo de café com o texto Coffe Delivery ao lado" />
      </Link>

      <S.Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span> Porto Alegre, RS</span>
        </div>

        <Link to="/cart" aria-disabled={!cart}>
          <ShoppingCart size={22} weight="fill" />
          {!!cart && <span>3</span>}
        </Link>
      </S.Aside>
    </S.HeaderContainer>
  )
}