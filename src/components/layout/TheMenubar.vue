<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      menus: [
        {
          id: "dashboard",
          icon: "",
          text: "Dashboard",
          path: "dashboard",
        },
        {
          id: "ft-expense",
          icon: "",
          text: "Expense",
          path: "expense",
        },
        {
          id: "ft-income",
          icon: "",
          text: "Income",
          path: "income",
        },
      ],
    };
  },
});
</script>

<template>
  <div class="menu-bar">
    <RouterLink to="/">
      <img src="/wjs.webp" alt="icon-wagejs" width="32" />
    </RouterLink>
    <ul class="menus">
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink to="{{menu.path}}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M10 6.675L10 2 3 2 3 22 11 22 11 16.6 13 16.6 13 22 21 22 21 10.275z"
            ></path>
          </svg>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-bar {
  padding: 20px;
}
.menus {
  padding: 20px;
  list-style-type: none;
  padding-inline-start: 0px;
}

.menus li {
  padding: 10px 0px;
}
</style>
