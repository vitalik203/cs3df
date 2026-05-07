import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Profile from "./pages/profile/Profile.tsx";
import Referal from "./pages/referal/Referal.tsx";
import Main from "./pages/main/Main.tsx";
import Navigation from "./components/navigation/Navigation.tsx";

export const RootLayout = () => {
  return (
    <>
      {/* Тепер Navigation знаходиться ВСРЕДИНІ контексту роутера */}
      <Navigation />

      {/* Outlet працює як "вікно", в якому будуть рендеритись сторінки */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/referal",
        element: <Referal />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
