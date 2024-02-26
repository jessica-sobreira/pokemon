
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ListaPokemon } from "../components/ListaPokemon";
import { Footer } from "../components/Footer";

export function Pokemon() {
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <ListaPokemon />
        <Footer />
        </>
    )
}
    


