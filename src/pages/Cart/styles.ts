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