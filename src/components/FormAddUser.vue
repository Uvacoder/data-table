<template>
  <form @submit.prevent="submitFormAdd" class="form-add">
    <VInput
      ref="inputName"
      label="Name"
      id="addName"
      v-model="userForm.name"
      placeholder="Ex: Lucas Santos"
    />
    <VInputTel
      label="Phone"
      id="addPhone"
      placeholder="Ex: (##) #####-####"
      v-model="userForm.phone"
    />

    <div class="btn-group">
      <VButton type="submit">Add</VButton>
      <VButton variant="gray" @click="clearUserForm">Clear</VButton>
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import { VButton, VInput, VInputTel } from "@/components/ui";

export default {
  name: "FormAddUser",
  components: { VButton, VInput, VInputTel },
  data: () => ({
    userForm: { name: "", phone: "" },
  }),

  methods: {
    ...mapMutations(["addUser"]),

    submitFormAdd() {
      try {
        this.addUser(this.userForm);
        this.clearUserForm();
        this.$refs.inputName.focus();
      } catch (error) {
        alert(error.message);
      }
    },
    clearUserForm() {
      this.userForm = { name: "", phone: "" };
      this.$refs.inputName.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins";

.form-add {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  .btn-group {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
  }

  @include on-screen-xs {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
