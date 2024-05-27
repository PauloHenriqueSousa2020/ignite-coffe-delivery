import { ThemeProvider } from "styled-components"
import { defaultTheme } from "@/styles/defaultTheme"
import { GlobalStyle } from "@/styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "@/routes/Router"
import { Header } from "./components/Header"
import { CyclesContextProvider } from "./context/CoffeContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
        <GlobalStyle />
        <CyclesContextProvider>
          <Header />
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}