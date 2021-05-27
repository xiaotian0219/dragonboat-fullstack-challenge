import axios from 'axios'

import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from './types'

export const fetchProjects = () => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECTS,
      payload: await axios.get('/projects').then((data) => data.data),
    })
}

export const fetchProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECT,
      payload: await axios.get(`/projects/${id}`).then((data) => data.data),
    })
}

export const createProject = (params) => {
  return async (dispatch) =>
    dispatch({
      type: CREATE_PROJECT,
      payload: await axios
        .post(`/projects`, { data: params })
        .then((data) => data.data),
    })
}

export const updateProject = (id, params) => {
  return async (dispatch) =>
    dispatch({
      type: UPDATE_PROJECT,
      payload: await axios
        .put(`/projects/${id}`, { data: params })
        .then((data) => data.data),
    })
}

export const removeProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: REMOVE_PROJECT,
      payload: await axios.delete(`/projects/${id}`).then(() => id),
    })
}
