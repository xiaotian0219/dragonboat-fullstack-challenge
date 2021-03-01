import axios from "axios";

import { FETCH_PROJECTS, FETCH_PROJECT } from "./types";

export const fetchProjects = () => {
  return {
    type: FETCH_PROJECTS,
    payload: axios.get("/projects").then((data) => data.data),
  };
};

export const fetchProject = (id) => {
  return {
    type: FETCH_PROJECT,
    payload: axios.get(`/projects/${id}`).then((data) => data.data),
  };
};
