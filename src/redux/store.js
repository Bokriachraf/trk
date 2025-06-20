import { configureStore } from '@reduxjs/toolkit'
import { shipmentListReducer,shipmentAddReducer } from './reducers/shipmentReducers';
import {devisReducer,devisAdminListReducer,devisListMyReducer,devisDetailsReducer} from './reducers/devisReducers'
import {  userRegisterReducer,userSigninReducer } from './reducers/userReducers';

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      shipmentList: shipmentListReducer,
      shipmentAdd: shipmentAddReducer,
      devis: devisReducer,
      devisListMy: devisListMyReducer,
      userSignin: userSigninReducer,
      userRegister: userRegisterReducer,
      devisDetails: devisDetailsReducer,
      devisAdminList: devisAdminListReducer,

    },
    preloadedState,
  });
}




// let userInfoFromStorage = null;

// if (typeof window !== 'undefined') {
//   const stored = localStorage.getItem('userInfo');
//   userInfoFromStorage = stored ? JSON.parse(stored) : null;
// }
// const initialState = {
//   userSignin: { userInfo: userInfoFromStorage },
// };
// export const store = configureStore({
//   reducer: {
//     shipmentList: shipmentListReducer,
//     shipmentAdd: shipmentAddReducer,
//     devis: devisReducer,
//     userSignin: userSigninReducer,
//     userRegister: userRegisterReducer,
//   },
//   preloadedState: {
//     userSignin: { userInfo: userInfoFromStorage },
//   },
// })