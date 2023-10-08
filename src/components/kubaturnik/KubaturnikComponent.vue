<template>
  <div class="wrap">
    <button @click="clear">Новый расчет</button>
    <br>
    <br>
    <ItemList />
  </div>
</template>

<script setup>
import ItemList from "./ItemList";
import {useStore} from "vuex";

const store = useStore();

function clear() {
  if (confirm('Новый расчет???')) {
    store.dispatch('clear')
  }
}
</script>

<style scoped>
.wrap {
  max-width: 420px;
  margin: 0 auto;
  padding: 15px;
}
</style>
