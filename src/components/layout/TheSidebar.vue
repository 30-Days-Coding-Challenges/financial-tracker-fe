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
          <RouterLink to="/" class="d-flex category-item py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path
                d="M 5 4 C 3.895 4 3 4.895 3 6 L 3 9 L 3 11 L 22 11 L 27 11 L 27 8 C 27 6.895 26.105 6 25 6 L 12.199219 6 L 11.582031 4.9707031 C 11.221031 4.3687031 10.570187 4 9.8671875 4 L 5 4 z M 2.5019531 13 C 1.4929531 13 0.77040625 13.977406 1.0664062 14.941406 L 4.0351562 24.587891 C 4.2941563 25.426891 5.0692656 26 5.9472656 26 L 15 26 L 24.052734 26 C 24.930734 26 25.705844 25.426891 25.964844 24.587891 L 28.933594 14.941406 C 29.229594 13.977406 28.507047 13 27.498047 13 L 15 13 L 2.5019531 13 z"
              ></path>
            </svg>
            <label class="ml-2">{{ category.name }}</label>
          </RouterLink>
        </li>
        <li>
          <BaseButton text="Add Category" variant="transparent" class="pl-0" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  background: #fafafa;
  padding: 40px 10px 20px 32px;
}

.sidebar-category {
  p {
    font-family: "PoppinB";
    font-weight: 700;
    font-size: 14px;
  }
  .categories {
    margin-top: 28px;
    li {
      * {
        cursor: pointer;
      }
      &:hover {
        a {
          color: $black-1;
          font-family: "PoppinB";
          svg {
            fill: $black-1;
          }
        }
      }
      .category-item {
        font-family: "PoppinM";
        font-size: 12px;
        color: $gray-1;
        transition: all 0.2s ease-in-out;
        svg {
          fill: $gray-2;
        }
      }
    }
  }
}
</style>
