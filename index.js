const express = require('express')
const morgan = require('morgan')

const usersRouter = require('./resources/users/user.router');
const projectsRouter = require('./resources/projects/projects.router');
const messageMiddleware = require('./middlewares/message.middleware');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routers
app.get('/', (req, res) => {
    res.send('GVR corriendo');
});

app.use("/users", authMiddleware, usersRouter)
app.use("/projects", authMiddleware, projectsRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})




