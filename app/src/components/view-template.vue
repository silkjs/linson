<template>
  <h3>example</h3>
  <div>
    <l-row :gutter="[16, 16]">
      <l-col :span="6"><l-button theme="default">Home</l-button></l-col>
      <l-col :span="6"><l-button theme="primary">Home</l-button></l-col>
      <l-col :span="6"><l-button theme="warning">Home</l-button></l-col>
      <l-col :span="6"><l-button theme="error">Home</l-button></l-col>
      <l-col :span="6"><l-button theme="success">Home</l-button></l-col>
    </l-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style></style>
