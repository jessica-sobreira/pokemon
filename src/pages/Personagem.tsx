import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import { Footer } from "../components/Footer";

export function Personagem() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", padding: { xs: "16px", md: "32px" } }}>

                <Box sx={{ marginBottom: { xs: "16px", md: 0 }, textAlign: { xs: "center", md: "left" } }}>
                    <Typography variant="h1" sx={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: "1.5em" }}>Personagem</Typography>
                    <Typography variant="h5" component="div">ID: 1</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "0.5em" }}>Tamanho: 10</Typography>
                    <Typography variant="h5" component="div">Lista de Habilidades</Typography>
                    <ul style={{ paddingLeft: "20px", marginBottom: "0.5em" }}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <Typography variant="h5" color="text.secondary" sx={{ marginBottom: "0.5em" }}>Lista de Stats</Typography>
                    <ul style={{ paddingLeft: "20px", marginBottom: "0.5em" }}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </Box>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" style={{ maxWidth: { xs: "100%", md: "auto" }, height: "auto", marginBottom: { xs: "16px", md: 0 } }} />

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
