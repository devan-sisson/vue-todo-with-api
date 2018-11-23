const express = require("express");
const createContainer = require("./todo");

const container = createContainer();
const todos = container.resolve("todos");

const todoRouter = new express.Router();

todoRouter
  .get("/", (req, res, next) => {
    todos.get().then(todos => {
      return res.status(200).json({ todos });
    });
  })
  .post("/", (req, res, next) => {
    console.log("Route Body todoText: ",req.body.todoText)
    todos.create(req.body.todoText).then(todos => res.json({ todos }));
  })
  .post("/toggle/:id", (req, res, next) => {
    console.log(req.params.id)
    todos.toggle(req.params.id).then(todos => res.json({ todos }));
  })
  .post("/edit/:id", (req, res, next) => {
    todos
      .edit(req.params.id, req.body.todoText)
      .then(todos => res.json({ todos }));
  })
  .delete("/:id", (req, res, next) => {
    todos.destroy(req.params.id).then(todos => res.json({ todos }));
  });

module.exports = todoRouter;
