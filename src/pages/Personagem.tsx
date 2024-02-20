import { useNavigate } from "react-router-dom";


export function Personagem() {
    const navigate = useNavigate();
    return (
        <>
        <ul>
            <li>Imagem</li>
            <li>ID</li>
            <li>Nome do Personagem</li>
            <li>Tamanho do Personagem</li>
            <li>Stats:
                <ul>
                    <li>HP</li>
                    <li>Ataque</li>
                    <li>Defesa</li>
                    <li>Ataque Especial</li>
                    <li>Defesa Especial</li>
                    <li>Velocidade</li>
                    <li>Total</li>
                </ul>
            </li>
            <button onClick={() => navigate("/pokemon")}>Voltar</button>

        </ul>
        </>
    )
}