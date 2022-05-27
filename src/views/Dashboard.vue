<script lang="ts">
import { defineComponent } from "vue";
import TheDashboardLayout from "../components/TheDashboardLayout.vue";
import BaseButton from "../components/Base/BaseButton.vue";
export default defineComponent({
  components: {
    TheDashboardLayout,
    BaseButton,
  },
});
</script>
<template>
  <TheDashboardLayout>
    <div class="d-flex w-100">
      <h1 class="text-semibold mr-auto content-title">Transactions</h1>
      <BaseButton text="New Transaction" />
    </div>
    <div class="transactions"></div>
  </TheDashboardLayout>
</template>

<style lang="scss" scoped></style>
