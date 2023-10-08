<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <ListItem :diameter="item.d" :volume="item.v" :quantity="item.q"
                @update:quantity="(v)=>itemChangeQuantity(item, v)"
                @remove="store.dispatch('removeItem', item.id)"
      />
    </li>
    <li>
      <AddForm />
    </li>
  </ul>
  <div class="total">
    <div>Итого</div>
    <div class="number">{{ total }}</div>
  </div>
</template>

<script setup>
import ListItem from "@/components/kubaturnik/ListItem";
import {useStore} from "vuex";
import {computed} from "vue";
import AddForm from "@/components/kubaturnik/AddForm";

const store = useStore()
store.dispatch('load')

const items = computed(() => [...store.state.items].sort((a, b) => a.d < b.d ? -1 : 1))
const total = computed(() => items.value.reduce((p, c) => p + (c.v * c.q), 0).toFixed(3));

function itemChangeQuantity(item, v) {
  item.q = v;
  store.dispatch('updateItem', item);
}

</script>

<style scoped>
ul {
  list-style: none;
  /*margin: -10px 0 0;*/
  padding: 0;
}

li {
  margin-top: 10px;
}
.total {
  text-align: right;
  font-weight: bold;
}
.number {
  font-size: 24px;
}
</style>
