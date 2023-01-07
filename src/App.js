import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./container/Home";
import Balance from "./container/CurrentBalance";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/current-balance",
          element: <Balance />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {/* <CounterPage /> */}
    </div>
  );
};

export default App;
