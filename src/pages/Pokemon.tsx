import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { RootState } from "../config/store";
import { useEffect } from "react";
import { pokemonChamada } from "../config/modules/pokemonSlice";
import { PokemonModel } from "../model/pokemon.model";

export function Pokemon() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { pokemonData, loading, error } = useAppSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(pokemonChamada("pikachu"));
    }, [dispatch]);

    if (loading) {
        return <h1>Carregando...</h1>
    }

    if (error) {
        return <h1>Erro ao carregar os pokemons</h1>
    }

    return (
        <>
        <Header />
        <h1>Pokemon</h1>
        <div>
            <h1>Lista de Personagens</h1>
            <ul>
                {pokemonData.map(({ name, height, id }: PokemonModel) => (
                    <li key={name}>
                        <div>Name: {name}</div>
                        <div>Height: {height}</div>
                        <div>ID: {id}</div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}



        {/* <Card sx={{ maxWidth: 345 }}>
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
        </Card> */}

 