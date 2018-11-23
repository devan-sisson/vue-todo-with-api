module.exports = ({ todoRepo }) => {
  return {
    get() {
      return todoRepo.get();
    },
    destroy(id) {
      return todoRepo.destroy(id);
    },
    create(todoText) {
      return todoRepo.create(todoText);
    },
    toggle(id) {
      return todoRepo.toggle(id);
    },
    edit(id, todoText) {
      return todoRepo.edit(id, todoText);
    }
  };
};
