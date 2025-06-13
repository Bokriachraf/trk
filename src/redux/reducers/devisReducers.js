import { SET_DEVIS_DATA, RESET_DEVIS_DATA } from '../constants/devisConstants';

const initialState = {
  nom: '',
  email: '',
  societe: '',
  service: '',
  dateSouhaitee: '',
  message: '',
};

const devisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVIS_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_DEVIS_DATA:
      return initialState;
    default:
      return state;
  }
};

export default devisReducer;