module.exports = ({ todoStore }) => {
  return {
    get() {
      return Promise.resolve(todoStore.get());
    },
    destroy(id) {
      return Promise.resolve(todoStore.destroy(id));
    },
    create(todoText) {
      return Promise.resolve(todoStore.create(todoText));
    },
    toggle(id) {
      return Promise.resolve(todoStore.toggle(id));
    },
    edit(id, todoText) {
      return Promise.resolve(todoStore.edit(id, todoText));
    }
  };
};
