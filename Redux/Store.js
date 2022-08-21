import { configureStore } from '@reduxjs/toolkit'
import DataForm from './DataForm';
const Store = configureStore({
  reducer: {
    DataForm,
  }
})
export default Store;