import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <h1>hello</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
