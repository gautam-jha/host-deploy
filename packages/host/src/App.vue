<template>
  <div class="host-container">
    {{ getTitle() }}
    <div class="mfe-container">
      <Suspense>
        <mfe-app></mfe-app>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { ref, Suspense } from "vue"
import MfeApp from "remote/Mfe";
const title = ref("Host container")
const getTitle = () => {
  return title.value;
}
</script>

<style scoped>
.mfe-container {
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.35);
}
</style>
