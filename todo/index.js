const {
  asFunction,
  createContainer
} = require('awilix')

const repo = require('./repo')
const store = require('./store')
const todos = require('./todos')

module.exports = () => {
  const container = createContainer()

  container.register({
    todoStore: asFunction(store).singleton(),
    todoRepo: asFunction(repo),
    todos: asFunction(todos)
  })

  return container
}
