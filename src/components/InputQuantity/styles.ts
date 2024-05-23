import styled from "styled-components";

export const InputQuantity = styled.div`
  background: ${({ theme }) => theme.colors.baseButton};
  ${({ theme }) => theme.fonts.textM};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  min-width: 72px;

  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;

    svg {
      fill: ${({ theme }) => theme.colors.purple};
      transition: fill 0.2s;
    }

    svg:hover {
      fill: ${({ theme }) => theme.colors.purpleDark};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.baseTitle};
    min-width: 18px;
    text-align: center;
  }

`