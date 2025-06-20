import { SET_DEVIS_DATA, RESET_DEVIS_DATA,DEVIS_SUBMIT_REQUEST,
  DEVIS_SUBMIT_SUCCESS,
  DEVIS_SUBMIT_FAIL,
DEVIS_LIST_MY_REQUEST,
  DEVIS_LIST_MY_SUCCESS,
  DEVIS_LIST_MY_FAIL,
 DEVIS_DETAILS_REQUEST,
  DEVIS_DETAILS_SUCCESS,
  DEVIS_DETAILS_FAIL,
  DEVIS_LIST_ADMIN_REQUEST,
  DEVIS_LIST_ADMIN_SUCCESS,
  DEVIS_LIST_ADMIN_FAIL,
  DEVIS_DELETE_REQUEST,
  DEVIS_DELETE_SUCCESS,
  DEVIS_DELETE_FAIL,
  DEVIS_UPDATE_STATUS_SUCCESS,
  DEVIS_UPDATE_STATUS_FAIL,
 } from '../constants/devisConstants';

const initialState = {
  devisData: {},
  loading: false,
  success: false,
  error: null,
};

const devisReducer = (state = initialState, action) => {
  switch (action.type) {
   case SET_DEVIS_DATA:
      return {
        ...state,
        devisData: { ...state.devisData, ...action.payload },
      };
    case DEVIS_SUBMIT_REQUEST:
      return { ...state, loading: true, error: null };
    case DEVIS_SUBMIT_SUCCESS:
      return { ...state, loading: false, success: true };
    case DEVIS_SUBMIT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case RESET_DEVIS_DATA:
      return initialState;
    default:
      return state;
  }
};

 const devisListMyReducer = (
  state = { loading: false, devis: [], error: null },
  action
) => {
  switch (action.type) {
    case DEVIS_LIST_MY_REQUEST:
      return { loading: true, devis: [] }
    case DEVIS_LIST_MY_SUCCESS:
      return { loading: false, devis: action.payload }
    case DEVIS_LIST_MY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const devisDetailsReducer = (state = { devis: {} }, action) => {
  switch (action.type) {
    case DEVIS_DETAILS_REQUEST:
      return { loading: true, devis: {} }
    case DEVIS_DETAILS_SUCCESS:
      return { loading: false, devis: action.payload }
    case DEVIS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case DEVIS_UPDATE_STATUS_SUCCESS:
  return {
    ...state,
    loading: false,
    devis: action.payload,
  }
case DEVIS_UPDATE_STATUS_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  }
      default:
      return state
  }
}
 const devisAdminListReducer = (state = { devis: [] }, action) => {
  switch (action.type) {
    case DEVIS_LIST_ADMIN_REQUEST:
      return { loading: true }
    case DEVIS_LIST_ADMIN_SUCCESS:
      return { loading: false, devis: action.payload }
    case DEVIS_LIST_ADMIN_FAIL:
      return { loading: false, error: action.payload }
   case DEVIS_DELETE_REQUEST:
      return { ...state, loading: true }
    case DEVIS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        devis: state.devis.filter((d) => d._id !== action.payload),
      }
    case DEVIS_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }

    // 🟡 Mettre à jour le statut d’un devis
    case DEVIS_UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        devis: state.devis.map((d) =>
          d._id === action.payload._id ? action.payload : d
        ),
      }

    default:
      return state
  }
}
export { devisReducer,devisAdminListReducer, devisListMyReducer, devisDetailsReducer };
