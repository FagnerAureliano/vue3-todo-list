<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TodoStatus from "./TodoStatus.vue";

const title = ref("");
const store = useStore();
const notification = ref({
  isVisible: false,
  status: "",
  message: "",
  title: "",
});

const addTodo = () => {
  if (!title.value) return;
  (notification.value.isVisible = true),
    store
      .dispatch("addTodo", {
        title: title.value,
        completed: false,
      })
      .then(() => {
        showNotification(
          "success",
          "Sucesso!",
          "Tarefa adicionada com sucesso!"
        );
      })
      .catch((error) => {
        showNotification("error", "Erro!", error.message);
      })
      .finally(() => {
        clear();
        notification.value.isVisible = false;
      });
};

const clear = () => {
  title.value = "";
};

const showNotification = (status, title, message) => {
  notification.value = {
    status,
    message,
    title,
  };
};
</script>

<template>
  <form
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mt-3"
  >
    <input
      v-model="title"
      placeholder="Adicione um novo item ..."
      type="text"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />

    <button
      class="text-green-400 text-xs font-semibold focus:outline-none hover:text-green-300"
      type="submit"
      @click.prevent="addTodo"
      :disabled="!title"
    >
      ADICIONAR
    </button>
  </form>

  <!-- Notificação -->
  <TodoStatus
    :isVisible="notification.isVisible"
    :status="notification.status"
    :message="notification.message"
    :title="notification.title"
  />
</template>
