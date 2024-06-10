import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  width: 70rem;
  margin: 0 auto;
  gap: 1rem;

  .cartContainerTitle {
    color: ${({ theme }) => theme.colors.baseSubtitle};
    ${({ theme }) => theme.fonts.titleXS};
    margin-bottom: 1rem;
  }

  .addressContent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const BaseContainer = styled.div`
  background: ${({ theme }) => theme.colors.baseCard};
  padding: 2.5rem;
`

export const AddressContainer = styled(BaseContainer)`
  flex: 1;
  border-radius: 6px;
  margin-bottom: 1rem;
  
  .addressInfoText {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${({ theme }) => theme.colors.yellowDark};
    }

    div {
      display: flex;
      flex-direction: column;
      
      p {
        ${({ theme }) => theme.fonts.textM};
        color: ${({ theme }) => theme.colors.baseSubtitle};
      }

      span {
        ${({ theme }) => theme.fonts.textS};
        color: ${({ theme }) => theme.colors.baseText};
      }
    }
  }
`

export const AddressMain = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;

`

export const OrderContainer = styled(BaseContainer)`
  width: 28rem;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 48px;
  border-bottom-left-radius: 48px;
`

export const PaymentHeader = styled.header`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;

  div {
    span {
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

    p {
      ${({ theme }) => theme.fonts.textS};
    }
}
  
  svg {
  color: ${({ theme }) => theme.colors.purple};
}
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.baseCard};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.baseButton};
    margin: 24px 0;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors.baseButton};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.baseHover};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${({ theme }) => theme.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.baseText};
    }
  }
`
export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${({ theme }) => theme.fonts.textS};
    }

    span:last-child {
      ${({ theme }) => theme.fonts.textM};
    }
  }
  

  div:last-child {
    span {
      ${({ theme }) => theme.fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${({ theme }) => theme.fonts.buttonG};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }

  border-radius: 6px;
`

export const PaymentErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.textXS};
  font-weight: 400;
  color: red;
`
