import { SET_DEVIS_DATA, RESET_DEVIS_DATA } from '../constants/devisConstants';

export const setDevisData = (data) => ({
  type: SET_DEVIS_DATA,
  payload: data,
});

export const resetDevisData = () => ({
  type: RESET_DEVIS_DATA,
});



