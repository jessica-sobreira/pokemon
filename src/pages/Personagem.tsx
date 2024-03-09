import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { getPokemonThunk } from "../config/modules/personagemSlice";

export function Personagem() {
    const params = useParams();
    const dispatch = useAppDispatch();

    const personagemChamado = useAppSelector(state => state.personagem);

    useEffect(() => {

        if(!params) {
            return; 
        }

        dispatch(getPokemonThunk(Number(params.id)));

    }, [params])

    if(!personagemChamado) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
                <p>Carregando...</p>
            </Box>
        )
    }

    const navigate = useNavigate();


    return (
        <>
            <Header />
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", padding: { xs: "16px", md: "32px" } }}>

                <Box sx={{ marginBottom: { xs: "16px", md: 0 }, textAlign: { xs: "center", md: "left" } }}>
                    <Typography variant="h1" sx={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: "1.5em" }}>{personagemChamado.name}</Typography>
                    <Typography variant="h5" component="div">ID: {params.id}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "0.5em" }}>Tamanho: {personagemChamado.height}</Typography>
                    <Typography variant="h5" component="div">Lista de Habilidades</Typography>
                    <ul style={{ paddingLeft: "20px", marginBottom: "0.5em" }}>
                        <li></li>

                    </ul>
                    <Typography variant="h5" color="text.secondary" sx={{ marginBottom: "0.5em" }}>Lista de Stats</Typography>
                    <ul style={{ paddingLeft: "20px", marginBottom: "0.5em" }}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </Box>

                <img src={personagemChamado.sprites.front_default} alt="pokemon" style={{ width: "200px", height: "200px", objectFit: "cover" }} />

            </Box>

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
