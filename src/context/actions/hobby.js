import axios from 'axios'
import {
  HOBBY_LIST_REQUEST,
  HOBBY_LIST_SUCCESS,
  HOBBY_LIST_ERROR,
  HOBBY_CREATE_REQUEST,
  HOBBY_CREATE_SUCCESS,
  HOBBY_CREATE_ERROR,
  HOBBY_DELETE_REQUEST,
  HOBBY_DELETE_SUCCESS,
  HOBBY_DELETE_ERROR,
  HOBBY_QUERY_WIKI_REQUEST,
  HOBBY_QUERY_WIKI_SUCCESS,
  HOBBY_QUERY_WIKI_ERROR,
} from '../../constants/actionTypes'

export const listHobby = (search, sort) => async (dispatch) => {
  try {
    dispatch({ type: HOBBY_LIST_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {
      data: { data },
    } = await axios.get(
      `/api/hobbies${search || sort ? '?' : ''}${
        search ? `&keyword=${search}` : ''
      }${search && sort ? '&' : ''}${sort ? `sort=${sort}` : ''}`,
      config
    )

    dispatch({ type: HOBBY_LIST_SUCCESS, payload: data })
  } catch (error) {
    const message = error?.response.data?.message
    dispatch({
      type: HOBBY_LIST_ERROR,
      payload: message,
    })
  }
}

export const createHobby =
  ({ title, description }) =>
  async (dispatch) => {
    try {
      dispatch({ type: HOBBY_CREATE_REQUEST })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const {
        data: { data },
      } = await axios.post('/api/hobbies', { title, description }, config)

      dispatch({ type: HOBBY_CREATE_SUCCESS, payload: data })
    } catch (error) {
      console.log(error.response)
      const message = error?.response.data?.message
      dispatch({
        type: HOBBY_CREATE_ERROR,
        payload: message,
      })
    }
  }

export const updateHobby =
  ({ id, title, description }) =>
  async (dispatch) => {
    try {
      dispatch({ type: HOBBY_CREATE_REQUEST })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const {
        data: { data },
      } = await axios.patch(
        `/api/hobbies/${id}`,
        { title, description },
        config
      )

      dispatch({ type: HOBBY_CREATE_SUCCESS, payload: data })
    } catch (error) {
      console.log(error.response)
      const message = error?.response.data?.message
      dispatch({
        type: HOBBY_CREATE_ERROR,
        payload: message,
      })
    }
  }

export const deleteHobby = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOBBY_DELETE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {
      data: { data },
    } = await axios.delete(`/api/hobbies/${id}`, config)

    dispatch({ type: HOBBY_DELETE_SUCCESS, payload: data })
  } catch (error) {
    console.log(error.response)
    const message = error?.response.data?.message
    dispatch({
      type: HOBBY_DELETE_ERROR,
      payload: message,
    })
  }
}

export const queryWiki = (search) => async (dispatch) => {
  try {
    dispatch({ type: HOBBY_QUERY_WIKI_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const {
      data: { data },
    } = await axios.get(
      `/api/hobbies/wiki?search=${search.toLowerCase()}`,
      config
    )

    console.log(data)
    dispatch({ type: HOBBY_QUERY_WIKI_SUCCESS, payload: data })
  } catch (error) {
    console.log(error.response)
    const message = error?.response.data?.message
    dispatch({
      type: HOBBY_QUERY_WIKI_ERROR,
      payload: message,
    })
  }
}
