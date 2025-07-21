const express = require('express')

const usersRouter = require('./resources/users/user.router');
const projectsRouter = require('./resources/projects/projects.router');
const messageMiddleware = require('./middlewares/message.middleware');

const app = express();


app.use("/users", messageMiddleware, usersRouter)
app.use("/projects", messageMiddleware, projectsRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})




