import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Personagem } from "../pages/Personagem";
import { Pokemon } from "../pages/Pokemon";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/pokemon",
        element: <Pokemon />
    },
    {
        path: "/personagem",
        element: <Personagem />
    },

]);