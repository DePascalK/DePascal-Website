import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './router.tsx'
import './styles/index.css'
// import Game from 'pages/game/TicTacToe.tsx'
// import { FullNavBar } from 'shared/ui_elements.tsx'
// import App from 'pages/home/Home.tsx'
import { createTheme, ThemeProvider } from "flowbite-react";

const siteTheme = createTheme({
  navbar: {
    root: { base: "bg-background" },
    collapse: { list: "text-lg md:text-lg" },
  },
  footer: { root: { base: "bg-background" } },
  card:   { root: { base: "bg-background" } },
  button: {
    color: {
      default: "bg-highlight text-foreground hover:bg-primary-400 focus:ring-primary-300",
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={siteTheme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)