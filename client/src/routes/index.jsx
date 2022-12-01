import { createBrowserRouter } from "react-router-dom";

import { Login, Register, Layout, Home, Request, PendingRequests,Orderd, Status } from "../Pages/index";

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
                path: "/request",
                element: <Request />,
            },
            {
                path: "/pending",
                element: <PendingRequests/>,
              },
              {
                path:"/orderd",
                element:<Orderd/>
              },
              {
                path:"/status",
                element:<Status />
              }
             
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;