import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    storeTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.unshift(todo);
    },
  },
  getters: {},
  actions: {
    getTodos({ commit }) {
      axios.get("http://localhost:3000/todos").then((response) => {
        commit("storeTodos", response.data);
      });
    },
    addTodo({ commit }, todo) {
      axios.post("http://localhost:3000/todos", todo).then((response) => {
        commit("addTodo", response.data);
      });
    },
    updateTodo(ctx, todo) {
      axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
    },
  },
  modules: {},
});
