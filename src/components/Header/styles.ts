import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: ${({ theme }) => theme.colors.purpleLight};
    border-radius: 6px;
    padding: 0.5rem;

    svg {
      fill: ${({ theme }) => theme.colors.purple};
    }

    span {
      ${({ theme }) => theme.fonts.textS};
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};
    position: relative;
    
    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${({ theme }) => theme.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      background: ${({ theme }) => theme.colors.yellowDark};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`