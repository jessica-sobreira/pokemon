
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ListaPokemon } from "../components/ListaPokemon";

export function Pokemon() {
    const navigate = useNavigate();

    return (
        <>
        <Header />
        <ListaPokemon />
        </>
    )
}
    


//     <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//             sx={{ height: 140 }}
//             image="/static/images/cards/contemplative-reptile.jpg"
//             title="green iguana"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//             Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small" onClick={() => navigate("/personagem")} startIcon={<AddIcon />} style={{ fontSize: "1.3em", color: "darkred" }}></Button>
//             <Button size="small" startIcon={<StarIcon />} style={{ fontSize: "1.3em", color: "darkred" }}></Button>
//         </CardActions>
//         </Card> 

 