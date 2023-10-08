<template>
  <div class="item">
    <div>{{ diameter }}</div>
    <div>{{ volume }}</div>
    <div class="btn" @click="q--">-</div>
    <input type="number" min="0" step="1" :value="q" @input="q = $event.target.value">
    <div class="btn" @click="q++">+</div>
    <div>=</div>
    <div>{{ total }}</div>
    <div><button @click="emits('remove')">x</button></div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['diameter', 'volume', 'quantity'])
const emits = defineEmits(['update:quantity', 'remove'])

const q = computed({
  get: () => props.quantity,
  set(v) {
    if (v !== '') emits('update:quantity', v)
  }
})
const total = computed(() => (props.volume * props.quantity).toFixed(3))
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 15px;
}
input {
  width: 100px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  line-height: 1;
  width: 40px;
  height: 40px;
  cursor: pointer;
  flex-shrink: 0;
}
</style>
