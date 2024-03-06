import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginacaoModel } from "../../model/paginacao.model";

const initialState: PaginacaoModel = {
    atual: 1,
    itensPorPagina: 20
};

const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState,
    reducers: {
        proximaPagina(state) {
            state.atual += 1;
        },
        paginaAnterior(state) {
            if (state.atual > 1) {
                state.atual -= 1;
            }
        },
        definirPagina(state, action: PayloadAction<number>) {
            state.atual = action.payload;
        },
        definirItensPorPagina(state, action: PayloadAction<number>) {
            state.itensPorPagina = action.payload;
        }
    }
});

export const { proximaPagina, paginaAnterior, definirPagina, definirItensPorPagina } = paginacaoSlice.actions;

export default paginacaoSlice.reducer;
