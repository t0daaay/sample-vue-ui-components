<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// props の定義
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

// emit の定義
const emit = defineEmits(["click"]);

// メソッド
const handleClick = () => {
  emit("click");
};
</script>

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
