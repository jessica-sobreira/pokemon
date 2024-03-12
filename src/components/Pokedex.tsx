import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Snackbar, Alert } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { addFavorite, removeFavorite } from '../config/modules/pokedexSlice'; 
import { PokemonModel } from '../model/pokemon.model'; 
import { useNavigate } from 'react-router-dom';

interface PokedexCardProps {
    pokemon: PokemonModel;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
    const dispatch = useAppDispatch();
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const isPokemonInPokedex = useAppSelector((state) => state.pokedex.favorites.some(p => p.id === pokemon.id));

    const handleAddFavorite = () => {
        dispatch(addFavorite(pokemon));
        const message = isPokemonInPokedex ? "Pokemon removido da Pokedex com sucesso!" : "Pokemon adicionado à Pokedex com sucesso!";
        setAlertMessage(message);
        setOpenAlert(true);
    };

    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(pokemon.id)); 
        const message = "Pokemon removido da Pokedex com sucesso!";
        setAlertMessage(message);
        setOpenAlert(true);
    };

    return (
        <>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '0.2rem' }}>
            <Card sx={{ paddingTop: '10px', backgroundColor: '#f5f5f5', height: 'auto' }}>
                <Button onClick={isPokemonInPokedex ? handleRemoveFavorite : handleAddFavorite} sx={{ color: isPokemonInPokedex ? 'red' : 'black', alignSelf: 'end', display: 'flex', paddingInlineStart: '15px' }}>
                    {isPokemonInPokedex ? <DeleteIcon /> : <StarIcon />} 
                </Button>

                <CardMedia
                    sx={{ borderRadius: '20px' }}
                    component="img"
                    alt={pokemon.name}
                    height='240'
                    width='240'
                    image={pokemon.sprites.front_default}
                />

                <CardContent>
                    <Typography variant="body1" color="black" style={{ textAlign: 'center' }}><strong>{pokemon.name.toUpperCase()}</strong></Typography>
                    

                </CardContent>
            </Card>

            <Snackbar className='styleAlert' open={openAlert} autoHideDuration={1900} onClose={() => setOpenAlert(false)}>
                <Alert variant='filled' onClose={() => setOpenAlert(false)} severity="success">{alertMessage}</Alert>
            </Snackbar>
        </Box>

        
        </>
    );
};