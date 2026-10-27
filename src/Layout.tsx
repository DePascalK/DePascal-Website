import { Outlet, ScrollRestoration } from "react-router";
import { FullNavBar } from "./shared/ui_elements";

export default function Layout() {
  return (
    <>
      <FullNavBar />
      <hr/>
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}