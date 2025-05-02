<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "@/components/TodoItem.vue";

const store = useStore();

const totalTodos = computed(() => store.state.todos.length);
const completedTodos = computed(
  () => store.state.todos.filter((todo) => todo.completed).length
);
</script>

<template>
  <div
    class="space-y-2 pb-3 max-h-[26.3rem] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    <p class="text-sm font-medium text-white mb-2">
      Total Todos: {{ totalTodos }} | Completed: {{ completedTodos }}
    </p>

    <TodoItem v-for="todo in store.state.todos" :key="todo.id" :todo="todo" />
  </div>
</template>
