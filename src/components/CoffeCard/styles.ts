import styled from "styled-components";

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
    align-items: center;
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
        padding: 0.5rem;
        transition: all 0.2s;
  
        svg {
          color: ${({ theme }) => theme.colors.white};
        }

        &:hover {
          background: ${({ theme }) => theme.colors.purple};
        }
      }
    }

  }
`