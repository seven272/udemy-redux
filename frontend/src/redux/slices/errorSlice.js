import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = ''

  const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            return action.payload
        },
        clearError() {
            return ''
        }
    }
  })

  export const { setError, clearError} = errorSlice.actions

  export const selectErrorMessage = (state) => state.error 

  export default errorSlice.reducer