<template>
  <div class="host-container">
    {{ title }}
    <div class="mfe-container">
      <mfe-app></mfe-app>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import MfeApp from "remote/Mfe";
const title = ref("Host container")

</script>

<style scoped>
.mfe-container {
  height: 400px;
  border: 2px solid rgba(255, 255, 255, 0.35);
}
</style>
