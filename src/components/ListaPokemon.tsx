import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';



export function ListaPokemon() {

    const navigate = useNavigate();
    
    return (
        <>
        <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }} >
        <CardMedia
            component="img"
            alt="pokemon"
            height="300"
            image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Nome: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Tamanho: 
            </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}></Button>
            <Button onClick={() => navigate("/")} startIcon={<StarIcon />}></Button>
        </CardActions>
        </Card>

        </>
    )
}