import { Pagination, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { changePage } from "../config/modules/paginacao.slice";
import { RootState } from "../config/store";

export const Paginacao = () => {
    const dispatch = useAppDispatch();
    const pokemons = useAppSelector((state: RootState) => state.pokemon);
    const paginacao = useAppSelector((state: RootState) => state.paginacao);

    const numPaginas = Math.ceil(pokemons.length / paginacao.rowsPerPage);

    const handleChangePage = (_: any, page: number) => {
        dispatch(changePage(page));
    };

    return (
        <Stack spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Pagination
                count={numPaginas}
                page={paginacao.currentPage}
                onChange={handleChangePage}
            />
        </Stack>
    );
};
