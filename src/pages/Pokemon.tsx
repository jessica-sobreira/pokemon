import { useNavigate } from "react-router-dom";
import { Pokedex } from "../components/Pokedex";
import { Header } from "../components/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';

import { PokemonModel } from "../model/pokemon.model";



// interface PokemonProps {
//     pokemon: PokemonModel
// }

export function Pokemon() {
    
    const navigate = useNavigate();
    
    return (
        <>
        <Header />
        <Pokedex />
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => navigate("/personagem")} startIcon={<AddIcon />} style={{ fontSize: "1.3em", color: "darkred" }}></Button>
            <Button size="small" startIcon={<StarIcon />} style={{ fontSize: "1.3em", color: "darkred" }}></Button>
        </CardActions>
        </Card>
        </>
    )
}

 