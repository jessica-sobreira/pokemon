import { Pagination } from "@mui/material"


export const Paginacao = () => {
    return(
        <div>
            <Pagination count={65} page={1} color="primary" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </div>
    ) 
}