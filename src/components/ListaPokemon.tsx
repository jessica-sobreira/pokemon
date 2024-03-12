import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Stack, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { Paginacao } from './Paginacao';
import { useEffect, useState } from 'react';
import { listarPokemonThunk } from '../config/modules/pokemonSlice';
import { CircularProgress, Box } from '@mui/material';
import { addFavorite } from '../config/modules/pokedexSlice'; 

export function ListaPokemon() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const pokemonDados = useAppSelector(state => state.pokemon);
 
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        dispatch(listarPokemonThunk());
    }, [dispatch]);

    const handleAddFavorite = (pokemon: any) => {
        dispatch(addFavorite(pokemon));
        setSnackbarMessage('Pokemon adicionado à Pokédex com sucesso!');
        setOpenSnackbar(true);
    };

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

    return (
        <>
            <Stack spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center" padding={2} sx={{ mt: 2 }} >
                    {pokemonDados.map((pokemon: any) => (
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
                                    <Button onClick={() => handleAddFavorite(pokemon)} startIcon={<StarIcon />}>
                                        Favorito
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000} 
                onClose={() => setOpenSnackbar(false)} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <br />
            <Paginacao />
            <br />
            <br />
            <Button onClick={() => navigate("/pokedex")} variant="contained" style={{ width: '100%', maxWidth: '300px', margin: '0 auto', display: 'block', marginTop: '20px', padding: '10px', marginBottom: '20px' }}>Pokedex</Button>
        </>
    );
}
