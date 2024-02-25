import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';

export function ListaPokemon() {
    const navigate = useNavigate();
    
    return (
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
                        <Typography gutterBottom variant="h5" component="div">
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
    );
}
