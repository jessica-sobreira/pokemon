import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Paginacao } from "../../model/paginacao.model";

// Estado inicial da paginação
const initialState: Paginacao = {
    currentPage: 1,
    rowsPerPage: 2, // Número padrão de itens por página
};

// Slice de paginação
const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState,
    reducers: {
        // Reducer para mudar a página atual
        changePage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        // Reducer para mudar o número de itens por página
        changeRowsPerPage: (state, action: PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
        },
    },
});

// Exporta os reducers e o reducer default da slice
export const { changePage, changeRowsPerPage } = paginacaoSlice.actions;
export default paginacaoSlice.reducer;
