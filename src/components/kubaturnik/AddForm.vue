<template>
  <div class="wrap">
    <select v-model="selected">
      <option v-for="item in diameters" :key="item[0]" :value="item.join(',')">{{ item[0] }}</option>
    </select>
    <button @click="add">Добавить</button>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import api from "@/api/kubaturnik";

const store = useStore();
const table = api.getTable();

const diameters = computed(() => {
  const d = store.state.items.reduce((o, i) => o.add(i.d), new Set());
  return table.filter(item => !d.has(item[0]));
})

const selected = ref(null);

function add() {
  const v = selected.value.split(',');
  store.dispatch('addItem', {d: +v[0], v: +v[1], q: 1});
}
</script>

<style scoped>
.wrap {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>
