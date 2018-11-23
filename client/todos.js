import axios from "axios";

export default class Todos {
  constructor() {
    this.api = axios.create({
      baseURL: "https://local3.rude-panda-26.telebit.xyz/api"
    });
  }

  get() {
    return this.api.get("/todos").then(res => res.data.todos)
  }

  destroy(id) {
    return this.api.delete(`/todos/${id}`).then(res => res.data.todos);
  }

  create(text) {
    const config = { todoText: text };
    return this.api.post("/todos", config).then(res => res.data.todos);
  }

  edit(id, text) {
    const config = { todoText: text };
    return this.api.post(`/todos/edit/${id}`, config).then(res => res.data.todos);
  }

  toggle(id) {
    return this.api.post(`/todos/toggle/${id}`).then(res => res.data.todos);
  }
}
