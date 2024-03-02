import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { SCContainer } from "./Container.styled";

export const App = () => {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignupPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);

  return (
    <>
      <div className="App">
        <SCContainer>
          <ThemeProvider theme={theme}>
            <RouterProvider router={routerConfig} />
          </ThemeProvider>
        </SCContainer>
      </div>
    </>
  );
};
