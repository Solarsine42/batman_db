const knex = require("../db/knex");

exports.getAllMessages = function(req, res) {
  knex
    .select()
    .table("messages")
    .then(messages => res.json(messages));
};

exports.getOneMessage = function(req, res) {
  knex
    .select()
    .table("messages")
    .where("id", req.params.id)
    .then(message => res.json(message));
};

exports.addOneMessage = function(req, res) {
  knex("messages")
    .insert(req.body)
    .returning("*")
    .then(newMessage => res.json(newMessage));
};

exports.updateOneMessage = function(req, res) {
  knex("messages")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMessage => res.json(updatedMessage));
};

exports.removeOneMessage = function(req, res) {
  knex("messages")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newList => res.json(newList));
};
