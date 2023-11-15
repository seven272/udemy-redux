import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // можно возвращать новое состояние, а можно мутировать благодаря встроенной библиотеке. классический подход это формирование нового состояния через return. но дальше будем мутирвоат
            state.title = action.payload
            // return {...state, title: action.payload}
        },
        resetFiltres: (state) => {
            return {...initialState}
        }
    }
})

export const { setTitleFilter, resetFiltres } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export default filterSlice.reducer