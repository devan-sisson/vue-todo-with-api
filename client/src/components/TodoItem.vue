<template>
  <div class="item">
    <span
      class="action checkbox"
      @click="emitToggleTodo">
      <i
        v-show="todo.done"
        class="fa fa-check"
        aria-hidden="true"></i>
    </span>
    <div class="label-actions">
      {{ todo.text }}
      <span
        class="action delete"
        @click="emitDelete">
        <i
          class="fa fa-trash-o"
          aria-hidden="true" />
      </span>

    </div>
  </div>

</template>

<script>
export default {
  name: "TodoItem",
  props: {
    num: Number,
    todo: {
      default: function() {
        return {
          id: 0,
          text: "Hello Todo",
          done: false
        };
      },
      type: Object
    }
  },
  methods: {
    emitToggleTodo: function() {
      this.$emit("toggle-todo", this.todo.id);
    },
    emitDelete: function() {
      this.$emit("delete-todo");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  font-size: 24pt;
  padding: 12px 12px;
}

.label-actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action {
  cursor: pointer;
  text-align: center;
  font-size: 24pt;
  height: 32px;
  min-width: 36px;
  padding-bottom: 4px;
  border-radius: 4pt;
  margin-right: 12px;
}

.action.checkbox {
  background-color: #ddd;
  color: #42b983;
}

.action.delete {
  color: #b84242;
}
</style>
