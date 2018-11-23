module.exports = () => {
  let store = [
    {
      id: 15,
      text: "Create Todo List in Vuejs",
      done: true
    }
  ];

  let id = 25;

  const get = () => {
    return store;
  };

  const create = text => {
    console.log("New Todo Text: ",text)
    store.push({
      id: id++,
      text: text,
      done: false
    });
    return store;
  };

  const destroy = id => {
    store = store.filter(todo => todo.id != id);

    return store;
  };

  const toggle = id => {
    store = store.reduce((todos, currTodo) => {
      if (currTodo.id == id) {
        currTodo.done = currTodo.done ? false : true;
      }
      todos.push(currTodo);
      return todos;
    }, []);

    return store;
  };

  const edit = (id, todoText) => {
    store = store.reduce((todos, currTodo) => {
      if (currTodo.id == id) {
        currTodo.text = todoText;
      }
      todos.push(currTodo);
      return todos;
    }, []);

    return store;
  };

  return {
    edit,
    destroy,
    create,
    get,
    toggle
  };
};
