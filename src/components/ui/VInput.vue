<template>
  <div class="input-row">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        ref="input"
        :id="id"
        type="text"
        :value="value"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    id: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    autocomplete: { type: String, default: "off" },
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins";

.input-row {
  @include input-row;

  label {
    margin-bottom: 0.35rem;
  }

  input {
    @include base-input;
  }
}
</style>
