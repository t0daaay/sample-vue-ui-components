<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

// props の定義
const props = defineProps<{
  label: string;
}>();

// emit の定義
const emit = defineEmits<{
  (e: "click"): void;
}>();

// メソッド
const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button @click="handleClick">{{ props.label }}</button>
</template>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #2a9d8f;
}
</style>
