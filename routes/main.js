const registerRouter = require('./register');
const authRouter = require('./auth');
const homeRouter = require('./home');
const profileRouter = require('./profile')

function route(app) {
    app.use("/", homeRouter);
    app.use("/login", authRouter);
    app.use("/register", registerRouter);
    app.use("/profile", profileRouter);
}

module.exports = route;
