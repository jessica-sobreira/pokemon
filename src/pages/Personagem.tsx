import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { getPokemonThunk } from "../config/modules/personagemSlice";

export function Personagem() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const personagemChamado = useAppSelector(state => state.personagem);
    const navigate = useNavigate();

    useEffect(() => {
        if (!params) {
            return;
        }
        dispatch(getPokemonThunk(Number(params.id)));
    }, [dispatch, params]);

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
            <Header />
            <Card sx={{ maxWidth: 600, margin: "auto", marginTop: 20 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, padding: "16px" }}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>{personagemChamado.name}</Typography>
                                <Typography variant="subtitle1">ID: {params.id}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Tamanho: {personagemChamado.height}</Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>Lista de Stats</Typography>
                                <List sx={{ pl: 0 }}>
                                    {personagemChamado.stats.map((stat: any, index: number) => (
                                        <ListItem key={index} sx={{ py: 0 }}>
                                            <ListItemText primary={`${stat.base_stat}`} secondary={getStatDescription(index)} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component="img"
                                src={personagemChamado.sprites.front_default}
                                alt="pokemon"
                                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Grid container justifyContent="center" mt={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Button 
                        size="small" 
                        startIcon={<ReplyIcon />} 
                        onClick={() => navigate("/pokemon")} 
                        sx={{ mt: 2, display: "block", mx: "auto" }}
                    >
                        Voltar
                    </Button>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

function getStatDescription(index: number) {
    switch (index) {
        case 0:
            return "HP (Hit Points): Pontos de vida do Pokémon.";
        case 1:
            return "Attack: Determina o poder dos ataques físicos do Pokémon.";
        case 2:
            return "Defense: Representa a capacidade do Pokémon de resistir aos ataques físicos do oponente.";
        case 3:
            return "Special Attack: Determina o poder dos ataques especiais (mágicos) do Pokémon.";
        case 4:
            return "Special Defense: Representa a capacidade do Pokémon de resistir aos ataques especiais (mágicos) do oponente.";
        case 5:
            return "Speed: Determina a rapidez do Pokémon em batalha, influenciando a ordem de ataque.";
        default:
            return "";
    }
}
