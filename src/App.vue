<template>

  <body class="bg-gray-800">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

        <TodoSpinner v-if="loading" />
        <template v-else>

          <TodoFormAdd />

          <TodoItens v-if="$store.state.todos.length" />

          <TodoEmpty v-else />
        </template>
      </div>
    </div>
  </body>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import TodoItens from '@/components/TodoItens.vue'
import TodoEmpty from '@/components/TodoEmpty.vue'
import TodoFormAdd from '@/components/TodoFormAdd.vue'
import TodoSpinner from '@/components/TodoSpinner.vue'

export default {
  name: 'App',
  components: {
    TodoEmpty,
    TodoItens,
    TodoFormAdd,
    TodoSpinner,
  },
  setup() {
    const loading = ref(false);
    const store = useStore();

    loading.value = true
    store.dispatch('getTodos').finally(() => {
      loading.value = false
    })

    return { loading };
  }

}
</script>
