import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        // Easy Importing for home, it downloads the whole page
      { index: true, element: <Home /> },
      {
        path: "subpage1",
        lazy: async () => ({
          Component: (await import("./pages/subpage1/Subpage1")).default,
        }),
      },
        // Downloading the whole game code is unnecessary, so use lazy
      {
        path: "game",
        lazy: async () => ({
          Component: (await import("./pages/game/TicTacToe")).default,
        }),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);