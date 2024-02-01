## Task Management system having priority based feature

### Created using Vite + React

### To run
 - clone the repo
 - change directory to the folder
 - install the dependencies using `npm install`
 - run the dev server using `npm run dev`
 - visit this [URL](http://localhost:5173/)

### Technology Used -

- Redux tool kit for storing the tasks
- Tailwind css for styling
- Typescript for more secure and bug free code
- Use of constants for dynamic values handling and easy upgrade

### Features -

- Tasks with priorities
- Filtering of tasks based on priority
- Different colors for each priority
- Editing of tasks
- Deletion of tasks
- Separate view for incomplete and completed tasks
- Checkbox implementation for marking any task complete or incomplete.

### Folder Structure -

- components - contains all the general used components
- constants - contains all the constant used through out the project like task priorities and their colors
- providers - contains redux provider wrapper component
- redux - contains code related to redux slices and store
- types - contains all the type of data and models used for task and other functionalities

### Components -

- TaskForm - this component handles the form view and functionality to add tasks

- TaskList - this component handles view related to priority legends and filtering of tasks based on priority and provides data to taskItem component

- TaskItem - this component handles view for each individual task. its a common component used by incomplete tasks and completed tasks.

### Working of Priority system-

- The priority system works with two ways -

    1.  Each priority have there own color, which helps in easy identification of task
    2.  There is a filter also, with help of which task can be filtered on view.

- User can modify the priority of any task by editing it. when editing the task, the values get populated in the form fields where user can change and values and update the task.
