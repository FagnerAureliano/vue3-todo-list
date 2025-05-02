<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TodoItens from "@/components/TodoItens.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";
import TodoSearch from "@/components/TodoSearch.vue";
import TodoFormAdd from "@/components/TodoFormAdd.vue";
import TodoSpinner from "@/components/TodoSpinner.vue";

const store = useStore();
const loading = ref(false);
const isClear = ref(false);

loading.value = true;
store.dispatch("getTodos").finally(() => {
  loading.value = false;
});
</script>
<template>
  <body class="bg-gray-800" style="height: 100vh">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
        <TodoSpinner v-if="loading" />

        <template v-else>
          <div
            class="mb-2 text-center text-white md:mb-10 w-full bg-gray-900 rounded-md p-5"
          >
            <svg
              class="w-16 h-16 mx-auto text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
              ></path>
            </svg>

            <h1 class="text-3xl font-bold text-white mb-5">Todo List</h1>
            <p class="text-gray-400">
              Adicione, busque, edite e remove suas tarefas
            </p>
          </div>

          <TodoSearch :is-clear="isClear" />

          <TodoItens v-if="$store.state.todos.length" />

          <TodoEmpty v-else />

          <TodoFormAdd />
        </template>
      </div>
    </div>
  </body>
</template>
