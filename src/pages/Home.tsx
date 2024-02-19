import Box from "@mui/material/Box";
import banner from "../assets/pokemon-inicio.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from "@mui/system/styled";


const StyledButton = styled(Button)`
  background-color: black;
  color: white;
  font-size: 1.3em;
  width: 200px;
  height: 75px;

  &:hover {
    background-color: darkred;
    color: white;
    transition: 0.9s;
    transform: scale(1.1);
    cursor: pointer;

  }
`;

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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {/* Usando o botão estilizado */}
          <StyledButton
            variant="contained"
            onClick={() => navigate("/pokemon")}
          >
            Bem-vindo!
          </StyledButton>
        </Box>
      </div>
    </Box>
  );
}
