const {Types} = require('mongoose');
const CustomError = require('../errors/CustomError');
const commentService = require('../services/comment.service');

module.exports = {
    isIdValid: (req, res, next) => {
        try {
            const {ID} = req.params;

            if (!Types.ObjectId.isValid(ID)) {
                return next(new CustomError('Not valid ID'));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isPresent: async (req, res, next) => {
        try {
            const {ID} = req.params;

            const comment = await commentService.findOne({_id: ID});
            if (!comment) {
                return next(new CustomError('Comment not found'));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isValidForCreate: async (req, res, next) => {
        try {
            const {name, email, message} = req.body;

            if (!name || name.length < 3) {
                return next(new CustomError('Set valid name'));
            }

            if (!email || !email.includes('@')) {
                return next(new CustomError('Set valid email'));
            }

            if (!message || message.length < 5) {
                return next(new CustomError('Set valid message'));
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};