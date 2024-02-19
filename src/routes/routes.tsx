import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokemon } from "../pages/Pokemon";
import { Personagem } from "../pages/Personagem";


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