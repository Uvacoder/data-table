<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="col in theadCols"
            :key="col.text"
            :style="{ width: col.width }"
          >
            {{ col.text }}
          </th>
        </tr>
      </thead>

      <tbody>
        <slot name="tbody"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VTable",
  props: {
    theadCols: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables";

.table-wrapper {
  $clr-table-border: #9b9b9b;
  display: block;
  overflow-x: auto;
  margin-bottom: 1rem;
  box-shadow: 0 0 2px 0 $clr-table-border;

  .table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
    font-size: 0.95rem;
    word-wrap: break-word;
    text-align: left;
    background-color: #fff;
  }

  .table thead {
    $clr-bg-thead: #e5e7eb;
    background-color: $clr-bg-thead;
    border-bottom: solid 2px $clr-table-border;

    th {
      position: sticky;
      top: -1px;
      padding: 0.75rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      background-color: $clr-bg-thead;
      vertical-align: middle;
    }
  }

  .table tbody {
    tr:nth-child(even) {
      background-color: $grey;
    }

    td {
      padding: 0.6rem 0.5rem;
      vertical-align: middle;
    }
  }
}
</style>
