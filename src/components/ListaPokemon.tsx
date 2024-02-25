import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import { changePage, changeRowsPerPage } from '../config/modules/paginacao.slice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export function ListaPokemon() {
    const navigate = useNavigate();
    const paginacao = useAppSelector((state) => state.paginacao);
    const dispatch = useAppDispatch();

    const mudarPagina = (_: any, pagina: number) => {
        dispatch(changePage(pagina + 1));
    };

    const mudarRows = (event: any) => {
        dispatch(changeRowsPerPage(event.target.value));
    };

    const posInicial = paginacao.rowsPerPage * (paginacao.currentPage - 1);

    
    return (
        <>
        
        <Stack spacing={2}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ maxWidth: 345, margin: "2em", padding: "10px" }}>
                    <CardMedia
                        style={{ objectFit: "contain" }}
                        component="img"
                        alt="pokemon"
                        height="300"
                        image="https://e7.pngegg.com/pngimages/141/1013/png-clipart-pokemon-pikachu-illustration-pokemon-gold-and-silver-pikachu-pikachu-video-game-cartoon-thumbnail.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Nome:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tamanho:
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                        <Button onClick={() => navigate("/personagem")} startIcon={<AddIcon />}>
                            Detalhes
                        </Button>
                        <Button onClick={() => navigate("/")} startIcon={<StarIcon />}>
                            Favorito
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>



        <Pagination 
        count={10} 
        color="primary"
        sx={{ display: "flex", justifyContent: "center", marginTop: "2em" }}
        // count={pokemonModel.length}
        page={paginacao.currentPage - 1}
        onChange={mudarPagina}
        // rowsPerPage={paginacao.rowsPerPage}
        // rowsPerPageOptions={[2, 3, 5, 10]}
        // onRowsPerPageChange={mudarRows}

        
        />
        </Stack>
        <br />
        <br />
    </>
    );
}
