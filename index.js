const express = require('express')

const usersRouter = require('./resources/users/user.router');
const projectsRouter = require('./resources/projects/projects.router');

const app = express();


app.use("/users", usersRouter)
app.use("/projects", projectsRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})




