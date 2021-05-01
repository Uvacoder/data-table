<template>
  <div id="app">
    <ul>
      <li v-for="person in dataUsers" :key="person.name">
        {{ person.name }}
        {{ person.phone }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dataUsers from "@/api/index";

export default Vue.extend({
  name: "App",
  data: () => ({
    dataUsers,
  }),
});
</script>
