import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
    name: "root",
    initialState: {
        who: "Who",
        what: "What",
        when: "When",
        where: "Where"
    },
    reducers: {
        enterWho: (state, action) => { state.who = action.payload },
        enterWhat: (state, action) => { state.what = action.payload },
        enterWhen: (state, action) => { state.when = action.payload },
        enterWhere: (state, action) => { state.where = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { enterWho, enterWhat, enterWhen, enterWhere } = rootSlice.actions;