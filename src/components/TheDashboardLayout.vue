<script lang="ts">
import { defineComponent } from "vue";
import TheContainer from "./layout/TheContainer.vue";
import TheMenubar from "./layout/TheMenubar.vue";
import TheSidebar from "./layout/TheSidebar.vue";
export default defineComponent({
  components: {
    TheContainer,
    TheMenubar,
    TheSidebar,
  },
});
</script>
<template>
  <div class="ft-layout">
    <TheMenubar />
    <TheSidebar />
    <TheContainer>
      <slot />
    </TheContainer>
  </div>
</template>
<style scoped>
.ft-layout {
  display: inline-grid;
  grid-template-columns: 64px 200px auto;
  height: 100vh;
}
</style>
