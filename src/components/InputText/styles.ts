import styled from "styled-components";

export const InputTextContainer = styled.div`
  background: ${({ theme }) => theme.colors.baseInput};
  border: 1px solid ${({ theme }) => theme.colors.baseButton};
  border-radius: 4px;
  min-height: 42px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.baseText};

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }

    &:focus {
      outline: none
    }
  }

  span {
    ${({ theme }) => theme.fonts.textS};
    color: ${({ theme }) => theme.colors.baseLabel};
    font-style: italic;
    padding-right: 0.75rem;
  }
`