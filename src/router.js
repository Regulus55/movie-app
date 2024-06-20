import {createBrowserRouter} from "react-router-dom";
import {MovieList, TVList, Detail, Main} from "./components";



const router = createBrowserRouter([
    {
        path: "/movie",
        element: <MovieList/>
    },
    {
        path: "/tv",
        element: <TVList/>
    },
    {
        path: "/movie/:id",
        element: <Detail/>
    },
    {
        path: "/tv/:id",
        element: <Detail/>
    },
    {
        path: "/",
        element: <Main/>,
    }
])



export default router