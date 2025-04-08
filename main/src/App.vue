<script setup>
import { bus } from "wujie";

// 事务总线   子应用向主应用发送消息
bus.$on("vue3", (data) => {
  console.log(data, "我是主应用");
});
</script>

<template>
  <h1>这是主应用</h1>
  <router-link to="/vue3">vue3</router-link>
  <router-link to="/react">react</router-link>
  <router-view />
</template>

<style scoped></style>
