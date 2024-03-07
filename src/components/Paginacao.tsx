import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { setPagina } from "../config/modules/paginacao.slice";
import { listarPokemonThunk } from "../config/modules/pokemonSlice";

export const Paginacao = () => {
    const paginacao = useAppSelector(state => state.paginacao);

    const count = Number.isInteger(paginacao.count) ? paginacao.count : 0;

    const countPages = Math.ceil(count / paginacao.itensPerPage); 
    const dispatch = useAppDispatch();

    const mudarPagina = (_: any, pagina: number) => {
        dispatch(setPagina(pagina));
        dispatch(listarPokemonThunk());
    }

    return (
        <>
            <Pagination 
                count={countPages} 
                page={paginacao.page} 
                onChange={mudarPagina} 
                color="primary" 
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}  
            />
        </>
    ) 
}



