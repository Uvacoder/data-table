<template>
  <div class="input-row">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        type="tel"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        v-mask="['(##) ####-####', '(##) #####-####']"
      />
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "VInputTel",
  directives: { mask },
  props: {
    id: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";
@import "@/assets/styles/_mixins";

.input-row {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;

  label {
    margin-bottom: 0.35rem;
  }

  input {
    @include transition;
    font-family: inherit;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #fff;
    border: solid 1px $dark;
    border-radius: 4px;
    height: 2rem;

    &:focus-visible {
      border-color: $light-blue;
      box-shadow: 0 0 3px 1px $light-blue;
      outline: none;
    }
  }
}
</style>
