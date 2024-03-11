import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Personagem } from "../pages/Personagem";
import { Pokemon } from "../pages/Pokemon";
import { PokedexPage } from "../pages/PokedexPage";



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
        path: "/pokemon/:id",
        element: <Personagem />
    },
    {
        path: "/pokedex",
        element: <PokedexPage />
    }

]);