<script setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
  title: String,
  status: String,
  message: String,
  isVisible: Boolean,
});

const showMessage = ref(props.isVisible);

const statusColor = {
  success:
    "bg-green-100 border-l-4 border-green-500 text-green-700 p-2 rounded-lg",
  error: "bg-red-100 border-l-4 border-red-500 text-red-700 p-2 rounded-lg",
  warning:
    "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 rounded-lg",
};

const statusClass =
  statusColor[props.status] ||
  "bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-2 rounded-lg";

watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      showMessage.value = true;
      setTimeout(() => {
        showMessage.value = false;
      }, 4000);
    }
  },
  { immediate: true }
);
</script>

<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="showMessage"
      :class="statusClass"
      class="fixed bottom-4 right-4 w-1/3"
    >
      <div class="flex justify-between">
        <p class="text-lg font-semibold">
          {{ props.title }}
        </p>
        <div>
          <div class="cursor-pointer p-[5px] py-0" @click="showMessage = false">
            x
          </div>
        </div>
      </div>
      <p>
        {{ props.message }}
      </p>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
