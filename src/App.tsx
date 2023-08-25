import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Reels from './pages/Reels/Reels';
import Explore from './pages/Explore/Explore';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

  // The `state` arg is correctly typed as `RootState` already

  // omit rendering logic

  return (
    // <div>

    // </div>

    <RouterProvider router={router} />
  );
}

export default App