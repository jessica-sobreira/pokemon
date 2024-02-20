import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Header() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: "darkred"}}>
            <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Pokemon 
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>

        </>
    )
}