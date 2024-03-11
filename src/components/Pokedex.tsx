// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../config/hooks';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';

// export function PokedexCard() {
//     const navigate = useNavigate();
//     const pokedex = useAppSelector(state => state.pokedex.favorites);

//     useEffect(() => {
//         // Você pode adicionar lógica adicional aqui, se necessário
//     }, []);

//     const handleNavigateToList = () => {
//         navigate("/pokemon");
//     };

//     return (
//         <>
//             <Header />
//             {/* <div>
//                 {pokedex.map((pokemon, index) => (
//                     <PokedexCard key={index} pokemon={pokemon} />
//                 ))}
//             </div> */}
//             <button onClick={handleNavigateToList}>Voltar para Lista de Pokémon</button>
//             <Footer />
//         </>
//     );
// }
