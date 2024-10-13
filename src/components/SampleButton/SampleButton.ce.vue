<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<template>
  <button @click="handleClick" class="button">
    反映確認
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}
</style>
