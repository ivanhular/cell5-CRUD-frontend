import {
  HOBBY_LIST_REQUEST,
  HOBBY_LIST_SUCCESS,
  HOBBY_LIST_ERROR,
  HOBBY_LIST_RESET,
  HOBBY_CREATE_REQUEST,
  HOBBY_CREATE_SUCCESS,
  HOBBY_CREATE_ERROR,
  HOBBY_CREATE_RESET,
  HOBBY_DELETE_REQUEST,
  HOBBY_DELETE_SUCCESS,
  HOBBY_SHOW_MODAL,
  HOBBY_HIDE_MODAL,
  HOBBY_SHOW_DELETE_MODAL,
  HOBBY_HIDE_DELETE_MODAL,
  HOBBY_SHOW_CONTENT_MODAL,
  HOBBY_HIDE_CONTENT_MODAL,
  HOBBY_SHOW_TOAST,
  HOBBY_HIDE_TOAST,
  HOBBY_TOAST_MESSAGE,
  HOBBY_SELECTED,
  HOBBY_SORT_BY,
  HOBBY_QUERY_WIKI_REQUEST,
  HOBBY_QUERY_WIKI_SUCCESS,
  HOBBY_QUERY_WIKI_ERROR,
} from '../../constants/actionTypes'

export const hobbyReducer = (state, action) => {
  switch (action.type) {
    case HOBBY_LIST_REQUEST:
    case HOBBY_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      }
    case HOBBY_DELETE_REQUEST:
      return {
        ...state,
        deleteLoading: true,
        deleteSuccess: false,
      }
    case HOBBY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        hobbies: action.payload,
      }
    case HOBBY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      }
    case HOBBY_DELETE_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: true,
      }
    case HOBBY_LIST_ERROR:
    case HOBBY_CREATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case HOBBY_LIST_RESET:
      return {
        ...state,
        hobbies: [],
      }

    case HOBBY_CREATE_RESET:
      return {
        ...state,
        error: '',
      }

    case HOBBY_SHOW_MODAL:
      return {
        ...state,
        modal: true,
      }
    case HOBBY_HIDE_MODAL:
      return {
        ...state,
        modal: false,
      }
    case HOBBY_SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteModal: true,
      }
    case HOBBY_HIDE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: false,
      }
    case HOBBY_SHOW_CONTENT_MODAL:
      return {
        ...state,
        contentModal: true,
      }
    case HOBBY_HIDE_CONTENT_MODAL:
      return {
        ...state,
        contentModal: false,
      }
    case HOBBY_SHOW_TOAST:
      return {
        ...state,
        toast: true,
      }
    case HOBBY_HIDE_TOAST:
      return {
        ...state,
        toast: false,
      }
    case HOBBY_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      }
    case HOBBY_SELECTED:
      return {
        ...state,
        selected: action.payload,
      }
    case HOBBY_SORT_BY:
      return {
        ...state,
        hobbies:
          action.payload === 'title'
            ? state.hobbies.sort((a, b) => {
                if (a.title.toLowerCase() === b.title.toLowerCase()) return 0
                return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
              })
            : state.hobbies.sort((a, b) => {
                if (a.description.toLowerCase() === b.description.toLowerCase())
                  return 0
                return a.description.toLowerCase() < b.description.toLowerCase()
                  ? -1
                  : 1
              }),
      }

    case HOBBY_QUERY_WIKI_REQUEST:
      return {
        ...state,
        queryWikiLoading: true,
      }
    case HOBBY_QUERY_WIKI_SUCCESS:
      return {
        ...state,
        queryWikiLoading: false,
        queryWikiSuccess: true,
        queryContent: action.payload,
      }
    case HOBBY_QUERY_WIKI_ERROR:
      return {
        ...state,
        queryWikiLoading: false,
        queryWikiSuccess: false,
        queryError: action.payload,
      }

    default:
      return state
  }
}
