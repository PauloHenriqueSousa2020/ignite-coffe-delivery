import { ThemeProvider } from "styled-components"
import { defaultTheme } from "@/styles/defaultTheme"
import { GlobalStyle } from "@/styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "@/routes/Router"
import { Header } from "./components/Header"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
        <GlobalStyle />
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}