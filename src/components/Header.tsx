import { AppBar, Avatar, Switch, Toolbar, styled } from "@mui/material";
import { useAppDispatch } from "../config/hooks";
import { mudarTema } from "../config/modules/themeSlice";
import logo from "../assets/logo.png"

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;


`;


export const Header = () => {
    const dispatch = useAppDispatch()

    const mudarTheme = () => {
        dispatch(mudarTema())
    }


    return (
        <AppBar position="static" style={{ padding: "8px" }}>
            <ToolbarStyled>

                <div className="logo">
                    <Avatar src={logo} alt="logo" sx={{ width: 102, height: 40 }} />
                </div>

                <div>
                <Switch onChange={mudarTheme} color="default" /> 

                </div>
            </ToolbarStyled>
        </AppBar>
    );
};