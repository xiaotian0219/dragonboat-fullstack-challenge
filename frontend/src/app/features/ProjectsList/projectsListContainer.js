import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  fetchProjects as fetchProjectsAction,
  removeProject as removeProjectAction,
  createProject as createProjectAction,
  updateProject as updateProjectAction,
  createProject,
} from '../../store/projects/actions'
import { selectProjects } from '../../store/projects/selectors'

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch()

    const fetchProjects = () => dispatch(fetchProjectsAction())
    const removeProject = (id) => {
      dispatch(removeProjectAction(id))
    }
    const saveProject = (id, params) => {
      if (id > 0) {
        dispatch(updateProjectAction(id, params))
      } else {
        dispatch(createProjectAction(params))
      }
    }

    const projects = useSelector((state) => selectProjects(state))

    useEffect(() => {
      fetchProjects()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <Component
        {...props}
        projects={projects}
        onRemove={removeProject}
        onSave={saveProject}
      />
    )
  }
}

export default container
