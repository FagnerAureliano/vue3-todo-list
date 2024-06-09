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
      const index  = state.todos.findIndex((t) => t.id === todo.id);
      if(index === -1) {
        state.todos.unshift(todo);
      }else{
        state.todos[index] = todo
      }
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
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
    deleteTodo({ commit}, {id}) {
      axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit("deleteTodo", id);
        
      });
    },
  },
  modules: {},
});
