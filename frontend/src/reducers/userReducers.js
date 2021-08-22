import {
  USER_LOGIN_REQUESTS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUESTS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUESTS:
      return {
        loading: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUESTS:
      return {
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
