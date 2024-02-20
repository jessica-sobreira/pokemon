import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        mudarTema: (state) => {
            return !state
        }
        
    }
});

export default themeSlice.reducer;

export const { mudarTema } = themeSlice.actions;
