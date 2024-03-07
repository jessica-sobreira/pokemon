import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { RootState } from '../config/store';
import { Paginacao } from './Paginacao';
import { useEffect } from 'react';
import { listarPokemonThunk } from '../config/modules/pokemonSlice';

export function ListaPokemon() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const pokemonDados = useAppSelector(state => state.pokemon);


    useEffect(() => {
        dispatch(listarPokemonThunk());

        }, []);

    
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
                                    <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                                        Detalhes
                                    </Button>
                                    <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
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





















// import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Pagination, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import StarIcon from '@mui/icons-material/Star';
// import { useAppDispatch, useAppSelector } from '../config/hooks';
// import { personagensThunk } from '../config/modules/pokemonSlice';
// import { useEffect } from 'react';
// import { Paginacao } from './Paginacao';
// import { mudarPagina } from '../config/modules/paginacao.slice';



// export function ListaPokemon() {
//     const dispatch = useAppDispatch();
//     const pokemonDados = useAppSelector((state) => state.pokemon);
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         dispatch(personagensThunk()); 
//     }, [dispatch]);




    
//     return (
//         <>
//         <Stack spacing={2}
//             sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//             >

//         <Grid container spacing={2} justifyContent="center" alignItems="center" padding={2} sx={{ mt: 2 }} >
//             {pokemonDados.map((pokemon) => (
//                 <Grid item key={pokemon.id} xs={12} sm={4} md={4} lg={3}>
//                     <Card sx={{ display: 'flex', flexDirection: 'column', height: 'auto', maxWidth: 280  }}>
//                         <CardMedia
//                             component="img"
//                             alt="pokemon"
//                             sx={{ maxWidth: '100%', maxHeight: '100%', imageRendering: 'auto' }} 
//                             image={pokemon.imgUrl}
//                         />
//                         <CardContent sx={{ flexGrow: 1 }}>
//                             <Typography gutterBottom variant="h6" component="div">
//                                 #{pokemon.id} - {pokemon.name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Tamanho: {pokemon.tamanho}
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
//                                 Detalhes
//                             </Button>
//                             <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
//                                 Favorito
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>


                    

//         <Pagination 
//         count={10} 
//         color="primary"
//         sx={{ display: "flex", justifyContent: "center", marginTop: "2em" }}
//         count={pokemonModel.length}
//         page={paginacao.currentPage - 1}
//         onChange={mudarPagina}
//         rowsPerPage={paginacao.rowsPerPage}
//         rowsPerPageOptions={[2, 3, 5, 10]}
//         onRowsPerPageChange={mudarRows}

        
//         />
//         </Stack>
//         <br />
//         <br />

//         </>
//     )
//         }