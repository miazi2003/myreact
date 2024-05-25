import { createBrowserRouter } from "react-router-dom";
import Home from "./home";

const routes = createBrowserRouter([
    {
        path:"Home",
        element:<Home/>

    }
])
export default routes;