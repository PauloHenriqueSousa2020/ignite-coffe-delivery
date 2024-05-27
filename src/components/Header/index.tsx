import { useContext } from "react";
import { CoffeContext } from "@/context/CoffeContext";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import * as S from "./styles";

export function Header() {
  const { coffes } = useContext(CoffeContext);

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Imagem de um copo de café com o texto Coffe Delivery ao lado" />
      </Link>

      <S.Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span> Porto Alegre, RS</span>
        </div>

        <Link to="/cart" aria-disabled={coffes?.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {coffes?.length > 0 && <span>{coffes?.length}</span>}
        </Link>
      </S.Aside>
    </S.HeaderContainer>
  )
}