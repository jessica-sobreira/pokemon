import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Box, Button, Grid, Card, CardContent, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

export function Personagem() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Box style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                

                <Typography variant="h1" sx={{ fontSize: "2.5em", fontWeight: "bold", marginTop: "0.5em", marginBottom: "0.5em", textAlign: "center" }}>Personagem</Typography>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            

            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                ID
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1
                            </Typography>
                        </CardContent>
                    </Card>
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



            </Box>
        </>
    );
}
