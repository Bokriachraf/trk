import { configureStore } from '@reduxjs/toolkit'
import { shipmentListReducer,shipmentAddReducer } from './reducers/shipmentReducers';

export const store = configureStore({
  reducer: {
    shipmentList: shipmentListReducer,
    shipmentAdd: shipmentAddReducer,
  },
})