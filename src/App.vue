<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "./components/SampleButton.vue";

const count = ref(0);
</script>

<template>
  <div>
    <CustomButton @click="count++">Click Me!</CustomButton>
    <div>count is {{ count }}</div>
  </div>
</template>
