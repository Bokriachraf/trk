import axios from 'axios';
import {
  SET_DEVIS_DATA,
  RESET_DEVIS_DATA,
  DEVIS_SUBMIT_REQUEST,
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
    DEVIS_UPDATE_STATUS_REQUEST,
    DEVIS_UPDATE_STATUS_SUCCESS,
    DEVIS_UPDATE_STATUS_FAIL,
  
} from '../constants/devisConstants';

const API = process.env.NEXT_PUBLIC_API_URL;

export const setDevisData = (data) => ({
  type: SET_DEVIS_DATA,
  payload: data,
});
export const resetDevisData = () => ({
  type: RESET_DEVIS_DATA,
});

export const submitDevis = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_SUBMIT_REQUEST });

    const {
      devis: { devisData },
    userSignin: { userInfo },
    } = getState();

    const response = await fetch(`${API}/api/devis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(userInfo?.token && { Authorization: `Bearer ${userInfo.token}` }),
      },
      body: JSON.stringify(devisData),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Erreur lors de l’envoi du devis');

    dispatch({ type: DEVIS_SUBMIT_SUCCESS, payload: data });

    return data; // ✅ pour permettre à Step3 de continuer
  } catch (error) {
    dispatch({ type: DEVIS_SUBMIT_FAIL, payload: error.message });
    throw error; // ✅ pour activer le catch() dans Step3
  }
};
export const listMyDevis = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_LIST_MY_REQUEST })

    const {
      userSignin: { userInfo },
    } = getState()

    const response = await fetch(`${API}/api/devis/mine`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || 'Erreur de récupération')

    dispatch({ type: DEVIS_LIST_MY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DEVIS_LIST_MY_FAIL,
      payload: error.message,
    })
  }
}

export const getDevisDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_DETAILS_REQUEST })

    const {
      userSignin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const isAdmin = userInfo?.isAdmin // ✅
    const endpoint = isAdmin
      ? `${API}/api/devis/admin/${id}`  // ✅ route spéciale pour admin
      : `${API}/api/devis/${id}`        // route normale pour user

    const { data } = await axios.get(endpoint, config)

    dispatch({ type: DEVIS_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DEVIS_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    })
  }
}

export const deleteDevis = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_DELETE_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState()
    const response = await fetch(`${API}/api/devis/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
    if (!response.ok) throw new Error('Erreur suppression')
    dispatch({ type: DEVIS_DELETE_SUCCESS, payload: id })
  } catch (error) {
    dispatch({ type: DEVIS_DELETE_FAIL, payload: error.message })
  }
}

export const updateDevisStatus = (id, status) => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_UPDATE_STATUS_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState()
    const response = await fetch(`${API}/api/devis/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify({ status }),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message || 'Erreur maj')
    dispatch({ type: DEVIS_UPDATE_STATUS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: DEVIS_UPDATE_STATUS_FAIL, payload: error.message })
  }
}


export const listAllDevis = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_LIST_ADMIN_REQUEST })

    const {
      userSignin: { userInfo },
    } = getState()

    const response = await fetch(`${API}/api/devis/admin`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || 'Erreur')

    dispatch({ type: DEVIS_LIST_ADMIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: DEVIS_LIST_ADMIN_FAIL, payload: error.message })
  }
}
export const getDevisDetailsAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVIS_DETAILS_REQUEST })

    const {
      userSignin: { userInfo },
    } = getState()

    const { data } = await axios.get(`${API}/api/devis/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })

    dispatch({ type: DEVIS_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DEVIS_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    })
  }
}
