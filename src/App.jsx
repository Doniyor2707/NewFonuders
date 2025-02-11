import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, MainLayout } from "./layout";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Home, Auth, GeneralTest, KidsTest } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Auth />,
        },
        {
          path: "kids",
          element: <KidsTest />,
        },
        {
          path: "general",
          element: <GeneralTest />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
