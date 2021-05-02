<template>
  <button :type="type" :class="`v-button ${variant}`" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: { type: String, default: "button" },
    variant: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";
@import "@/assets/styles/_mixins";

.v-button {
  $bg-default: $light-blue;
  $bg-red: #d43d3d;
  $bg-green: #4caf50;

  @include transition(background-color);
  width: max-content;
  padding: 0.3rem 0.75rem;
  margin: 0 0.3rem;
  background-color: $bg-default;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: $font-primary;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-default, 10%);
  }

  &:focus,
  &:focus-visible {
    background-color: darken($bg-default, 10%);
    outline: 2px solid $bg-default;
    outline-offset: 1px;
    box-shadow: none;
  }

  &.red {
    background-color: $bg-red;

    &:hover {
      background-color: darken($bg-red, 10%);
    }
    &:focus,
    &:focus-visible {
      background-color: darken($bg-red, 10%);
      outline-color: $bg-red;
    }
  }

  &.green {
    background-color: $bg-green;

    &:hover {
      background-color: darken($bg-green, 10%);
    }
    &:focus,
    &:focus-visible {
      background-color: darken($bg-green, 10%);
      outline-color: $bg-green;
    }
  }
}
</style>
