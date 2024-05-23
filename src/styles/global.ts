import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => theme.fonts.textM}
    font-size: 1rem;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: 8px;
    background: none;
  }

  ::-webkit-scrollbar-track {
    margin: 0;
    border-radius: 8px;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.yellow};
    height: 3rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
} 
`
