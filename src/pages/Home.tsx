import Box from "@mui/material/Box";
import banner from "../assets/pokemon-home.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
  return (
    <Box style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src={banner}
        alt="pokemon"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: "75%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              fontSize: "1.3em",
              width: "200px",
              height: "75px",
            }}
            onClick={() => navigate("/pokemon")}
          >
            Bem-vindo!
          </Button>
        </Box>
      </div>
    </Box>
  );
}
