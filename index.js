const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config();

const usersRouter = require('./resources/users/user.router');
const projectsRouter = require('./resources/projects/projects.router');
const authRouter = require('./resources/auth/auth.router');
const messageMiddleware = require('./middlewares/message.middleware');
const authMiddleware = require('./middlewares/auth.middleware');
const ossRouter = require('./resources/oss/oss.router');

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routers
app.get('/', (req, res) => {
    res.send('GVR corriendo');
});

app.use("/users", authMiddleware, usersRouter)
app.use("/projects", /*authMiddleware*/ projectsRouter)
app.use("/auth", /*authMiddleware*/ authRouter);
app.use("/oss", authMiddleware, ossRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})




