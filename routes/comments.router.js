const commentsRouter = require('express').Router();

const commentsController = require("../controllers/comments.controller");
const commonMiddleware = require('../middlewares/comments.middleware');

commentsRouter.get('/',
    commentsController.getAll);
commentsRouter.get('/:ID',
    commonMiddleware.isIdValid,
    commonMiddleware.isPresent,
    commentsController.getById);
commentsRouter.post('/',
    commonMiddleware.isValidForCreate,
    commentsController.create);
commentsRouter.delete('/:ID',
    commonMiddleware.isIdValid,
    commonMiddleware.isPresent,
    commentsController.deleteById);

module.exports = commentsRouter;