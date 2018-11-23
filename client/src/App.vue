<template>
  <div id="app">
    <h1>Due-it</h1>
    <create-todo
      @create-todo="createTodo"/>
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :num="index"
      :todo="todo"
      @toggle-todo="toggleTodo(todo.id)"
      @delete-todo="deleteTodo(todo.id)"/>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import TodoItem from './components/TodoItem.vue';
import CreateTodo from './components/CreateTodo.vue';
import Todos from '../todos'

const todos = new Todos();

export default {
  name: "app",
  components: {
    TodoItem,
    CreateTodo
  },
  data: function() {
    return {
      todos: [],
    }
  },
  created: function() {
    const vm = this
    todos.get()
      .then((todos) => {
        vm.todos = todos
        })
      .catch(err => console.log(err))

    console.log("this.todos:",JSON.stringify(this.todos))
  },
  methods: {
    toggleTodo: function(id) {
      const vm = this
      todos.toggle(id)
        .then(todos => {
        vm.todos = todos
        })
        .catch(err => console.log(err))
    },
    deleteTodo: function(id) {
      const vm = this
      todos.destroy(id)
        .then(todos => {
        vm.todos = todos
        })
        .catch(err => console.log(err))
    },
    createTodo: function(todoText) {
      const vm = this
      todos.create(todoText)
        .then(todos => {
        vm.todos = todos
        })
        .catch(err => console.log(err))
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}

h1 {
  font-size: 32pt;
  color: #2c3e50;
}
</style>
