## Dragonboat Code Challenge

The main purpose of this challenge is to evaluate the ability to add functionality to an existing codebase following the pre-existent stack and design patterns.

On the backend you will find a node.js 3-layer architecture (you may want to read more about it at https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf - read 3 layer architecture section and ignore the rest). The database layer was mocked with a model that reads and writes from/to a local object as it is not the main purpose of this challenge (you are free to replace by a Sequelize, Mongoose or any other tool). You can extend the existing API as you need in order to fit your needs.

On the frontend you will find a React/Redux project using:

- Material-UI as component library and theme provider (https://material-ui.com/getting-started/usage/) - don't spend to much time on this but consider using components from this library if necessary (buttons, lists etc.)
- Reselect as selector library (https://github.com/reduxjs/reselect) - spend some time on this one
- Styled-Components as CSS-in-JS tool (https://styled-components.com) - Use styled-components to write css.

Please avoid using patterns/libraries that overlap the purpose of the existing ones.

## Challenge Tasks

The priority of the tasks goes from MUST (High Priority) to COULD (Nice to have)

- The user must be able to view a table of projects. Each project must have an `id`, `title`, `author`, `start_date`, `end_date`

- The user must be able to delete a project

- The user must be able to add a new project using a form displayed as a dialog or a drawer

- The user should be able to edit a project using a form displayed as a dialog or a drawer

- The user could be able to sort the table by id or title

- The user could be able to view tasks, which are children of Projects (1 project has multiple tasks) and have the same attributes as Projects (display tasks in the way you find better in terms of UI/UX)

## How to run

Install the dependencies using `npm i` and run `npm start` in both `backend` and `front` directories two start the api and the frontend.
