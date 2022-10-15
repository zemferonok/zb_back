const commentsService = require('../services/comment.service');
const commentService = require("../services/comment.service");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const users = await commentsService.find();
            res.json(users);
        } catch (e) {
            console.log('controller error')
            next(e);
        }
    },

    getById: async (req, res, next) => {
        try {
            const {ID} = req.params;
            const comment = await commentService.findOne({_id: ID});
            res.json(comment);
        } catch (e) {
            next(e);
        }
    },

    create: async (req, res, next) => {
        try {
            const newUser = await commentsService.create(req.body);
            res.status(201).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    deleteById: async (req, res, next) => {
        try {
            const {ID} = req.params;
            await commentsService.deleteOne({_id: ID})

            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
};