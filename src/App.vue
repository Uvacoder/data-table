<template>
  <transition name="fade-transition" appear>
    <div class="page-wrapper">
      <h1 class="page-title">Users List</h1>

      <main>
        <FormAddUser />
        <TableUsers />
      </main>
    </div>
  </transition>
</template>

<script>
import FormAddUser from "@/components/FormAddUser";
import TableUsers from "@/components/TableUsers";

export default {
  name: "App",
  components: { FormAddUser, TableUsers },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.page-wrapper {
  margin: 0 auto;
  max-width: 750px;

  .page-title {
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    border-bottom: $dark-grey 1px solid;
  }

  main {
    padding: 0 1rem;
    padding-bottom: 2rem;
  }
}
</style>
