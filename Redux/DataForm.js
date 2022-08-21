import { createSlice } from '@reduxjs/toolkit'
export const DataForm = createSlice({
  name: 'counter',
  initialState : {
    title : '',
    amount : '',
    date : ''
  },
  reducers: {
    handelTitle: (state , action) => {
      state.title = action.payload
    },
    handelAmount: (state , action) => {
        state.amount = action.payload
    },
    handelDate: (state, action) => {
        state.date = action.payload
    },
  },
})

export const { handelTitle, handelAmount, handelDate } = DataForm.actions

export default DataForm.reducer