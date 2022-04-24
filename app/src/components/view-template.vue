<template>
  <h3>example</h3>
  <div>
    <Button theme="primary">Home</Button>
    <l-button theme="primary">Home</l-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@silkjs/linson";

export default defineComponent({
  components: {
    Button,
  },
  setup() {},
});
</script>
<style></style>
