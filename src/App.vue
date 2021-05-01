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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
