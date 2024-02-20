import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Pokedex } from "./components/Pokedex";
import { pokemonTheme } from "./config/themes/default.theme";
import { useAppSelector } from "./config/hooks";
import { darkTheme } from "./config/themes/dark.mode";

export function Root() {
    const defaultTheme = useAppSelector((state) => state.theme)

    const theme = defaultTheme ? pokemonTheme : darkTheme

    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Pokedex />
        </ThemeProvider>

        </>
    )
}
