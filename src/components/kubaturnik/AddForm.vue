<template>
  <div class="form">
    <select v-model="selected">
      <option v-for="item in diameters" :key="item[0]" :value="item.join(',')">{{ item[0] }}</option>
    </select>
    <input type="number" min="1"
           v-model="quantity"
           @focus="inputFocus"
           style="width:50px"
    >
    <button @click="add">Добавить</button>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import api from "@/api/kubaturnik";
import {inputFocus} from '@/tools/dom';

const store = useStore();
const table = api.getTable();

const diameters = computed(() => {
  const d = store.state.items.reduce((o, i) => o.add(i.d), new Set());
  return table.filter(item => !d.has(item[0]));
})

const selected = ref(null);
const quantity = ref(1);

function add() {
  if (selected.value) {
    const v = selected.value.split(',');
    const q = quantity.value;
    store.dispatch('addItem', {d: +v[0], v: +v[1], q: +q > 0 ? q : 1});
    selected.value = '';
    quantity.value = 1;
  }
}
</script>

<style scoped>
.form {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>
