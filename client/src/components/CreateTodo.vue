<template>
  <div class="create-todo">
    <input
      v-model="newTodo"
      type="text"
      placeholder="new todo"
      @keyup.enter="emitCreateTodo">
    <button @click="emitCreateTodo">Create</button>
  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data: function() {
    return {
      newTodo: ''
    }
  },
  methods: {
    emitCreateTodo: function() {
      if (this.newTodo.length > 0) {
        this.$emit('create-todo', this.newTodo)
        this.newTodo = ''
      }
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
  margin: 0 auto;
  margin-bottom: 12px;
}

button {
  flex: 1 0 auto;
  border-radius: 4pt;
  background-color: #2c3e50;
  color: #ddd;
  font-size: 24pt;
  cursor: pointer;
  min-width: 36px;
  border-radius: 4pt;
}

input {
  flex: 1 0 auto;
  font-size: 24pt;
  border: none;
  background-color: #ddd;
  margin-right: 12px;
  padding: 4px;
  box-sizing: border-box;
}

@media (max-width: 568px) {
  input {
    width: 300px;
    margin-bottom: 12px;
    margin-right: 0px;
  }
  button {
    width: 100%;
    height: 48px;
  }
}
</style>
