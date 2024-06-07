import styled from 'styled-components'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.baseText};
  text-transform: uppercase;
  ${({ theme }) => theme.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors.purpleLight};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
