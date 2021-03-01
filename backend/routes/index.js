import { Router } from "express";

import ProjectsControllerREST from "../server/projects/projects.controller.rest";

const router = Router();

const projects = new ProjectsControllerREST();

router.use("/projects", projects.getRoutes());

module.exports = router;
