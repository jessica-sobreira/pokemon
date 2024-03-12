import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../config/hooks';
import { PokedexCard } from "../components/Pokedex";
import { PokemonModel } from '../model/pokemon.model';

export const PokedexPage: React.FC = () => {
    const [error, setError] = useState('');
    const pokedexFavorito = useAppSelector((state) => state.pokedex);

    useEffect(() => {
        if (!pokedexFavorito.favorites.length) {

            setError('');
          
            alert("Você ainda nao tem nenhum pokemon favorito!");
          

        }
    }, [pokedexFavorito]);

    return (
        <>
        <Header />

            <Grid container spacing={2}>
                {error ? error : (pokedexFavorito.favorites.map((pokemon: PokemonModel) => (
                            <Grid item key={pokemon.id} xs={12} sm={5} md={4} lg={3} sx={{ margin: '15px', display: 'inline-grid', justifyContent: 'center' }}>
                                <PokedexCard pokemon={pokemon} />
                            </Grid>
                        )
                    )
                )}
            </Grid>
            <Footer />
        </>
    );
};


