import {RouteObject, createBrowserRouter}  from "react-router-dom";
import PublicRouter from "./PublicRouter";
import {ROUTES} from "./constants";

const routes: RouteObject[] = [
    {
        path: '/', element: <PublicRouter/>,
        children: [
            //{index: true, element: <Home/>},
            //{path: ROUTES.HOME, element: </>},

        ]
    }
];

export const router = createBrowserRouter(routes);