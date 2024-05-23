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
  gap: 3.5rem;
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
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
    gap: 1rem;

    div {
      svg {

      }
    }
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
    font-size: 0.875rem;
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
export const CoffeCard = styled.div`
  background: ${({ theme }) => theme.colors.baseCard};
  width: 16rem;
  height: 20rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.875rem;

  img {
    margin-top: -1rem;
  }
  
  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;

    .tag {
      background: ${({ theme }) => theme.colors.yellowLight};
      text-transform: uppercase;
      ${({ theme }) => theme.fonts.tag};
      color: ${({ theme }) => theme.colors.yellowDark};
      padding: 0.25rem 0.5rem;
      border-radius: 16px;
    }
  }

  .coffeTitle  {
    ${({ theme }) => theme.fonts.titleS};
    color: ${({ theme }) => theme.colors.baseSubtitle};
    margin-bottom: 0.875rem;
  }

  .coffeDescription {
    ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors.baseLabel};
    text-align: center;
    margin-bottom: 1rem;
  }

  .coffePriceContainer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;

    .priceWrapper {
      color: ${({ theme }) => theme.colors.baseText};

      .cipher {
        ${({ theme }) => theme.fonts.textS};
      }

      .price {
        ${({ theme }) => theme.fonts.titleM};

      }
    }

    .coffePriceShopping {
      display: flex;
      gap: 0.25rem;
      align-items: center;

      .shoppingCartButton {
        background: ${({ theme }) => theme.colors.purpleDark};
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 0.25rem 0.5rem;
  
        svg {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }

  }
`