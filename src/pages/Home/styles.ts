import styled from "styled-components";

export const Container = styled.div`
  padding: 5.75rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8rem;
    
  img#coffe-delivery-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 34rem;
    width: 100%;
    object-fit: cover;
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 70rem;
  margin: 0 auto;
`

export const TextImageContainer = styled.div`
  display: flex;
  gap: 3.25rem;
`

export const TextContainer = styled.div`
  p {
    ${({ theme }) => theme.fonts.titleXL};
    color: ${({ theme }) => theme.colors.baseTitle};
    margin-bottom: 1rem;
  }

  span {
    ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  .infosContainer {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    margin-top: 4rem;
    gap: 0.75rem;
  }
`

const COFFE_COLORS = {
  yellowDark: 'yellowDark',
  yellow: 'yellow',
  baseText: 'baseText',
  purple: 'purple'
} as const

interface CoffeColorsProps {
  coffeColors: keyof typeof COFFE_COLORS
}

export const ShoppingInfoContainer = styled.div<CoffeColorsProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    background: ${(props) => props.theme.colors[COFFE_COLORS[props.coffeColors]]};   
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.baseText};
    ${({ theme }) => theme.fonts.textM};
  }
`

export const CoffeListContainer = styled.div`
  width: 70rem;
  margin: 0 auto;

  .title {
    ${({ theme }) => theme.fonts.titleL};
    margin-bottom: 2rem;
  }

  .coffeList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`