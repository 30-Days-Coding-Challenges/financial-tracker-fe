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
<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  background: #676d72;
  padding: 8px 16px;
  font-family: "PoppinM";
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &--disabled {
    background: #f1f1f1;
    color: #545356;
  }
  &--transparent {
    background: transparent;
    color: #615aff;
    &:hover {
      background: #f0f0ff;
      border-color: #d9d9d9;
    }
  }
  &--danger {
    background: #e53e3e;
    color: #ffffff;
  }
  &--success {
    background: #38a169;
    color: #ffffff;
  }
  &--primary {
    background: $primary;
    color: #ffffff;
  }
  &--warning {
    background: #d69e2e;
    color: #ffffff;
  }
}
</style>
