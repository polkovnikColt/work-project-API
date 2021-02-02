const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const adminsRouter = require('./routes/admins/adminsRouter');
const newsRouter = require('./routes/news/newsRouter');
const toolsRouter = require('./routes/tools/toolsRouter');
const loginRouter = require('./routes/login/loginRouter');
const middleware = require('./middleware/passport');
const config = require('./config/config');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
middleware(passport);

app.use('/admins', adminsRouter.route);

app.use('/news', newsRouter.route);

app.use('/tools', toolsRouter.route);

app.use('/login', loginRouter.route);

module.exports.start = async () => {
    try {
        await mongoose.connect(config.mongodbURL,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(config.PORT, () => {
            console.log(`Sever Started on port: ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}