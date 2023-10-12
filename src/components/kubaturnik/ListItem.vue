<template>
  <tr class="item">
    <td><div class="d">{{ diameter }}</div></td>
    <td><div class="v">{{ volume }}</div></td>
    <td>
      <div class="q">
        <div class="btn" @click="q--">-</div>
        <div class="input">
          <input type="number" min="0" step="1" :value="q" @input="q = $event.target.value">
        </div>
        <div class="btn" @click="q++">+</div>
      </div>
    </td>
    <td><div class="v">=</div></td>
    <td><div class="total">{{ total }}</div></td>
    <td>
      <button class="r" @click="emits('remove')">x</button>
    </td>
  </tr>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['diameter', 'volume', 'quantity'])
const emits = defineEmits(['update:quantity', 'remove'])

const q = computed({
  get: () => props.quantity,
  set(v) {
    if (v !== '') emits('update:quantity', v > 0 ? v : 1)
  }
})
const total = computed(() => (props.volume * props.quantity).toFixed(3))
</script>

<style scoped>
.d {
  border: 1px solid gray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.input {
  flex-grow: 1;
}

input {
  width: 100%;
  height: 30px;
  text-align: center;
  border: 0;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  line-height: 1;
  width: 30px;
  height: 30px;
  cursor: pointer;
  flex-shrink: 0;
}

.q {
  display: flex;
  align-items: center;
}
.v {
  padding: 0 15px;
}
.r {
  margin-left: 15px;
}
.total {
  min-width: 55px;
  font-weight: bold;
}
</style>
