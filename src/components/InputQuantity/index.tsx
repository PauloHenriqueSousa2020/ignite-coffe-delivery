import { Minus, Plus } from "phosphor-react";

import * as S from "./styles";

interface InputQuantityProps {
  value: number,
  handleDecrementValue: () => void;
  handleIncrementValue: () => void;
}

export function InputQuantity({ value, handleDecrementValue, handleIncrementValue }: InputQuantityProps) {

  return (
    <S.InputQuantity>
      <button onClick={handleDecrementValue}>
        <Minus size={14} weight="fill" />
      </button>
      <span>{value}</span>
      <button onClick={handleIncrementValue}>
        <Plus size={14} weight="fill" />
      </button>
    </S.InputQuantity>
  )
}