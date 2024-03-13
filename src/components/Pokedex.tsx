import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Snackbar, Alert } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { addFavorite, removeFavorite } from '../config/modules/pokedexSlice'; 
import { PokemonModel } from '../model/pokemon.model'; 

interface PokedexCardProps {
    pokemon: PokemonModel;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
    const dispatch = useAppDispatch();
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const isPokemonInPokedex = useAppSelector((state) => state.pokedex.favorites.some(p => p.id === pokemon.id));

    const handleAddOrRemoveFavorite = () => {
        if (isPokemonInPokedex) {
            dispatch(removeFavorite(pokemon.id)); 
            setAlertMessage("Pokemon removido da Pokedex com sucesso!");
        } else {
            dispatch(addFavorite(pokemon));
            setAlertMessage("Pokemon adicionado à Pokedex com sucesso!");
        }
        setIsAlertOpen(true);
    };

    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 300, backgroundColor: '#f5f5f5', margin: 'auto' }}>
                <CardMedia
                    component="img"
                    alt={pokemon.name}
                    height='240'
                    width='240'
                    image={pokemon.sprites.front_default}
                    sx={{ borderRadius: '20px 20px 0 0' }}
                />
                <CardContent>
                    <Typography variant="body1" color="black" align="center"><strong>{pokemon.name.toUpperCase()}</strong></Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button onClick={handleAddOrRemoveFavorite} variant="contained" color={isPokemonInPokedex ? 'error' : 'primary'}>
                            {isPokemonInPokedex ? <DeleteIcon /> : <StarIcon />} 
                            {isPokemonInPokedex ? 'Remover da Pokedex' : 'Adicionar à Pokedex'}
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Snackbar open={isAlertOpen} autoHideDuration={1900} onClose={() => setIsAlertOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setIsAlertOpen(false)} severity="success" sx={{ width: '100%' }}>{alertMessage}</Alert>
            </Snackbar>
        </Box>
        </>
    );
};
