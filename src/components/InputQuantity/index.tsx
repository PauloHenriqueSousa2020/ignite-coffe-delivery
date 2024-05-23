import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import * as S from "./styles";

export function InputQuantity() {
  const [value, setValue] = useState(0);

  function handleIncrementValue() {
    setValue(value + 1)
  }
  function handleDecrementValue() {
    setValue(value === 0 ? 0 : value - 1)
  }
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