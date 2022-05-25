<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      default: "My Button",
      type: String,
    },
    variant: {
      default: "primary",
      type: String,
      // validator(value: string) {
      //   return ["primary", "success", "warning", "danger", "disabled"].includes(
      //     value
      //   );
      // },
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
});
</script>
<template>
  <button :class="'btn btn--' + variant" :disabled="disabled">
    {{ text }}
  </button>
</template>
<style scoped>
.btn {
  border-radius: 8px;
  background: #676d72;
  padding: 8px 16px;
  font-family: "PoppinM";
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.btn--disabled {
  background: #f1f1f1;
  color: #545356;
}
.btn--transparent {
  background: transparent;
  color: #a39ffa;
}
.btn--disabled:hover {
  border-color: #d7d7d7;
}
.btn--danger {
  background: #e53e3e;
  color: #ffffff;
}
.btn--success {
  background: #38a169;
  color: #ffffff;
}
.btn--primary {
  background: #3182ce;
  color: #ffffff;
}
.btn--warning {
  background: #d69e2e;
  color: #ffffff;
}
</style>
