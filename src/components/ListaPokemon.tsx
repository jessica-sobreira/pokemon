import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { Paginacao } from './Paginacao';
import { useEffect } from 'react';
import { listarPokemonThunk } from '../config/modules/pokemonSlice';
import { CircularProgress, Box } from '@mui/material';
import { addPokedex } from '../config/modules/pokemonSlice';

export function ListaPokemon() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const pokemonDados = useAppSelector(state => state.pokemon);
    const personagemChamado = useAppSelector(state => state.personagem);


    useEffect(() => {
        dispatch(listarPokemonThunk());

        }, []);

        if (!pokemonDados) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Box>
                        <CircularProgress />
                        <Typography variant="body1" mt={2}>Carregando...</Typography>
                    </Box>
                </Box>
            );
        }

        const adicionarPokemonFavorito = () => {
            dispatch(addPokedex(personagemChamado)); 
        }


    
    return (
        <>
            <Stack spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center" padding={2} sx={{ mt: 2 }} >

                    {pokemonDados.map((pokemon) => (
                        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                            <Card key={pokemon.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%'  }}>
                                <CardMedia
                                    component="img"
                                    alt="pokemon"
                                    height="140"                      
                                    image={pokemon.sprites.front_default} style={{ width: '180px', height: '180px' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }} style={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        #{pokemon.id} - {pokemon.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tamanho: {pokemon.height}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => navigate(`/pokemon/${pokemon.id}`)} startIcon={<AddIcon />}>
                                        Detalhes
                                    </Button>
                                    <Button onClick={() => { adicionarPokemonFavorito(); navigate("/pokedex"); }} startIcon={<StarIcon />}>
                                        Favorito
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <br />
            <Paginacao />
            <br />
            <br />
        </>
    );
}
