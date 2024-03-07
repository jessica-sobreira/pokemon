import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaginacaoModel } from "../../model/paginacao.model";


const state: PaginacaoModel = {
    page: 1,
    itensPerPage: 20,
    count: 0,
}


const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState: state,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                count: action.payload
            }
        },
        setPagina: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                page: action.payload
            }
        }
    }
});

export default paginacaoSlice.reducer

export const { setCount, setPagina } = paginacaoSlice.actions;









// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { PaginacaoModel } from "../../model/paginacao.model";

// const initialState: PaginacaoModel = {
//     atual: 1,
//     itensPorPagina: 20
// };

// const paginacaoSlice = createSlice({
//     name: "paginacao",
//     initialState,
//     reducers: {
//         proximaPagina(state) {
//             state.atual += 1;
//         },
//         paginaAnterior(state) {
//             if (state.atual > 1) {
//                 state.atual -= 1;
//             }
//         },
//         definirPagina(state, action: PayloadAction<number>) {
//             state.atual = action.payload;
//         },
//         definirItensPorPagina(state, action: PayloadAction<number>) {
//             state.itensPorPagina = action.payload;
//         }
//     }
// });

// export const { proximaPagina, paginaAnterior, definirPagina, definirItensPorPagina } = paginacaoSlice.actions;

// export default paginacaoSlice.reducer;
