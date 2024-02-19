import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

export const App = () => {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/sign-up",
      element: <SignupPage/>
    },
    {
      path: "/main",
      element: <MainPage/>,
    },
    {
      path: "/profile",
      element: <ProfilePage/>
    }
  ])

  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={routerConfig}/>
        </div>
      </div>
    </>
  );
}
