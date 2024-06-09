<template>

  <body class="bg-gray-800">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

        <TodoSpinner v-if="true" />

        <TodoFormAdd />

        <TodoItens />

        <TodoEmpty v-if="true" />
      </div>
    </div>
  </body>
</template>

<script>
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
  }
}
</script>
