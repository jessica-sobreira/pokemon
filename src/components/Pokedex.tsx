import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { useEffect } from 'react';


export function PokedexCard() {
    const dispatch = useAppDispatch();
    const personagemChamado = useAppSelector(state => state.personagem);

    useEffect(() => {

    }, [])


    if (!personagemChamado) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
                <p>Carregando...</p>
            </Box>
        )
    }

    return (
        <>     
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={personagemChamado.sprites.front_default}
                alt="Pokemon favorito"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {personagemChamado.name}
                </Typography>

                </CardContent>
            </CardActionArea>
            </Card>
        </>
        
    )
}