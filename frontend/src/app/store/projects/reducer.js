import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from './types'

const initialState = {
  byId: {},
  ids: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      const data = action.payload || []
      return {
        ...state,
        byId: data.reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: data.map((p) => p.id),
      }
    }

    case FETCH_PROJECT: {
      const data = action.payload

      if (!data) return state

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      }
    }

    case CREATE_PROJECT: {
      const data = action.payload

      if (!data) return state

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
        ids: [...state.ids, data.id],
      }
    }

    case UPDATE_PROJECT: {
      const data = action.payload

      if (!data) return state

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      }
    }

    case REMOVE_PROJECT: {
      const pId = action.payload
      const byId = state.byId
      delete byId[pId]

      return {
        ...state,
        byId: byId,
        ids: state.ids.filter((id) => id != pId),
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
