<script lang="ts">
import axios from "axios";
import { defineComponent, reactive } from "vue";
import { RepositoryAPI } from "../../api/repositoryApi";
const sourceTypeApi = RepositoryAPI.get("sourceType");

// type Category = {
//   ID: string;
//   Name: string;
//   Type: string;
//   UpdatedAt: string;
//   CreatedAt: string;
// };

// let allCategories: Category[] = reactive([]);

// async function getAllItemSource() {
//   try {
//     await axios
//       .get("http://localhost:8080/v1/" + "item-sources")
//       .then(function (res) {
//         allCategories = res.data.data;
//         console.log(allCategories);
//       });
//   } catch (error) {}
// }

// getAllItemSource();

export default defineComponent({
  data() {
    return {
      allCategories: reactive([]),
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
});
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-category">
      <p>CATEGORIES</p>
      <ul>
        <li v-for="category in allCategories" :key="category.ID">
          {{ category.Name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  background: #fafafa;
  padding: 40px 10px 20px 10px;
}
.sidebar-category p {
  font-weight: 700;
}
</style>
