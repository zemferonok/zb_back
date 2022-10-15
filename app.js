const express = require('express');
const mongoose = require('mongoose');

const commentsRouter = require('./routes/comments.router');
const configs = require('./configs/configs');

mongoose.connect(configs.MONGO_URL);
// If db does not exist, it will be created.

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/comments', commentsRouter);
app.use('*', (req, res) => res.status(404).json('Page not found'));

// Catch error from deeper level
app.use((err, req, res, next) => {
    res
        .status(err?.status || 500)
        .json({
            error: err?.message || 'Unknown Error',
            code: err?.status || 500
        });
});

app.listen(configs.PORT, () => {
    console.log(`Server listen ${configs.PORT}`, new Date())
});