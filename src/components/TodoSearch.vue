<script setup>
import { useStore } from "vuex";
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  isClear: {
    type: Boolean,
    default: false,
  },
});

const title = ref("");
const store = useStore();

const findByText = () => {
  store.dispatch("findByText", title.value);
};

watch(
  () => props.isClear,
  (newValue) => {
    if (newValue) {
      clear();
    }
  }
);

const clear = () => {
  title.value = "";
  store.dispatch("getTodos");
};
</script>
<template>
  <form
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
  >
    <input
      v-model="title"
      placeholder="Buscar ..."
      type="text"
      @input="findByText"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />

    <svg
      v-if="title"
      class="w-6 h-6 text-green-800 text-sm dark:text-green-400 cursor-pointer hover:text-green-100 dark:hover:text-green-300"
      aria-hidden="true"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      @click.prevent="clear"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18 17.94 6M18 18 6.06 6"
      />
    </svg>
  </form>
</template>
