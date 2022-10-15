const Comments = require('../dataBase/comments.js');

module.exports = {
    find: (params = {}) => {
        return Comments.find(params);
    },
    findOne: (params = {}) => {
        return Comments.findOne(params);
    },
    create: (user) => {
        return Comments.create(user);
    },
    deleteOne: (params = {}) => {
        return Comments.deleteOne(params);
    },
}