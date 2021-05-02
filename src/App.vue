<template>
  <div id="app">
    <h1>Users list</h1>

    <VTable
      class="v-table"
      :theadCols="[
        { text: 'Name', width: 200 },
        { text: 'Phone', width: 200 },
        { text: 'Action', width: 100 },
      ]"
    >
      <template #tbody>
        <tr v-for="person in dataUsers" :key="person.name">
          <td>{{ person.name }}</td>
          <td>{{ person.phone }}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dataUsers from "@/api/index";
import VTable from "@/components/ui/VTable.vue";

export default Vue.extend({
  name: "App",
  components: { VTable },
  data: () => ({
    dataUsers,
  }),
});
</script>

<style lang="scss" scoped>
#app {
  text-align: center;

  .v-table {
    margin: 0 auto;
    max-width: 800px;
  }
}
</style>
