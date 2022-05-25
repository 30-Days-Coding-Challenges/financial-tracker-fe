<script lang="ts">
import axios from "axios";
import { defineComponent, reactive } from "vue";
import { RepositoryAPI } from "../../api/repositoryApi";
import BaseButton from "../Base/BaseButton.vue";
const sourceTypeApi = RepositoryAPI.get("sourceType");

export default defineComponent({
  data() {
    return {
      allCategories: [
        {
          id: "1",
          name: "Project",
          path: "/project",
        },
        {
          id: "2",
          name: "Investment",
          path: "/investment",
        },
        {
          id: "3",
          name: "Salary",
          path: "/salary",
        },
      ],
      baseURL: "http://localhost:8080/v1/",
    };
  },
  setup() {},
  mounted() {
    this.getAllItemSource();
    console.log(this.allCategories, "ini");
  },
  methods: {
    async getAllItemSource() {
      try {
        await axios.get(this.baseURL + "item-sources").then(function (res) {
          console.log(res.data.data);
          this.allCategories = res.data.data;
        });
      } catch (error) {}
    },
  },
  components: { BaseButton },
});
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-category">
      <p>CATEGORIES</p>
      <ul class="categories">
        <li v-for="category in allCategories" :key="category.id">
          <RouterLink to="/">{{ category.name }}</RouterLink>
        </li>
        <li>
          <BaseButton text="Add Category" variant="transparent" class="pl-0" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  background: #fafafa;
  padding: 40px 10px 20px 32px;
}
.sidebar-category p {
  font-family: "PoppinB";
  font-weight: 700;
  font-size: 12px;
}

.sidebar-category .categories {
  margin-top: 28px;
}

.sidebar-category .categories li {
  margin-bottom: 20px;
}

.sidebar-category .categories li a {
  font-family: "PoppinM";
  font-size: 16px;
  color: #747474;
  transition: all 0.2s ease-in-out;
}

.sidebar-category .categories li a:hover {
  color: #8700a1;
}
</style>
