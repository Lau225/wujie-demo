<script setup>
const send = () => {
  // 会挂在一个wujie的对象到window上
  console.log(window.$wujie);
  window.$wujie.bus.$emit("vue3", "我是子应用");
};
</script>

<template>
  <h1>Hello Vue 3</h1>
  <button @click="send()">Send</button>
</template>

<style scoped></style>
