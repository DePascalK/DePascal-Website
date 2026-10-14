import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/index.css'
import App from './App'
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

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={siteTheme}>
    <App />
  </ThemeProvider>
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={siteTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
