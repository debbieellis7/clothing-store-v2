import axios from 'axios'
import {
  USER_LOGIN_REQUESTS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../constants/userConstants'

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUESTS })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('uerInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
