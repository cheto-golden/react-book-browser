import { RouteObject, createBrowserRouter }  from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { Home, Horror, Juvenile, Romance } from "pages";
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: '/', element: <PublicRouter/>,
        children: [
            { index: true, element: <Home/> },
            { path: ROUTES.HORROR, element: <Horror/> },
            { path: ROUTES.JUVENILE, element: <Juvenile/> },
            { path: ROUTES.ROMANCE, element: <Romance/> },
        ]
    }
];

export const router = createBrowserRouter(routes);