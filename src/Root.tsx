import { CssBaseline, ThemeProvider } from "@mui/material";
import { pokemonTheme } from "./config/themes/default.theme";
import { useAppSelector } from "./config/hooks";
import { darkTheme } from "./config/themes/dark.mode";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

export function Root() {
    const defaultTheme = useAppSelector((state) => state.theme)

    const theme = defaultTheme ? pokemonTheme : darkTheme

    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={routes} />
        </ThemeProvider>

        </>
    )
}
