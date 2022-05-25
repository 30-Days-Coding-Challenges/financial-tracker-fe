<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 40px 20px 40px 64px;
  width: 50vw;
}
</style>
