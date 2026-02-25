<template>
  <div :class="[ns.b()]">这是按钮111111</div>
</template>
<script>
export default { name: "l-button" };
</script>
<script setup>
import { useNamespace } from "@ui-study/hook";
const ns = useNamespace("button");
console.log(ns.b());
</script>
