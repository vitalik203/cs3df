import { createContext, StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'flag-icons/css/flag-icons.min.css';
import { createBrowserRouter, Outlet } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Navigation from './components/navigation/Navigation.tsx';
import PasswordScreen from './pages/auth/PasswordScreen.tsx';
import Additional2FA from './pages/auth/Additional2FA.tsx';
import SeePages from './pages/SeePages.tsx';

// eslint-disable-next-line react-refresh/only-export-components
export const CurrentStage = createContext({
  currentStage: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentStage: (stage: number) => {}, // Порожня функція для типізації
});

export const RootLayout = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    // Initializing Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <CurrentStage.Provider value={{ currentStage, setCurrentStage }}>
      {/* Тепер Navigation знаходиться ВСРЕДИНІ контексту роутера */}
      <Navigation />

      {/* Outlet працює як "вікно", в якому будуть рендеритись сторінки */}
      <main>
        <Outlet />
      </main>
    </CurrentStage.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <PasswordScreen />,
      },
      {
        path: '/profile',
        element: <SeePages />,
      },
      {
        path: '/referal',
        element: <Additional2FA />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
