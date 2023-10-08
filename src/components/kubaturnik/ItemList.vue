<template>
  <div class="list-content">
    <div class="content">
      <table>
        <ListItem v-for="item in items" :key="item.id"
                  :diameter="item.d" :volume="item.v" :quantity="item.q"
                  @update:quantity="(v)=>itemChangeQuantity(item, v)"
                  @remove="store.dispatch('removeItem', item.id)"
        />
      </table>
    </div>

    <div class="bottom">
      <div class="right">
        <AddForm />
      </div>
      <br>
      <div class="total">
        <div>Итого</div>
        <div class="number">{{ total }}</div>
      </div>
    </div>
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
.right {
  display: flex;
  justify-content: flex-end;
}
.list-content {
  display:flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 65px;
}
.bottom {
  background: white;
  position: fixed;
  bottom:0;
  left: 0;
  right:0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  height: 65px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
}

.total {
  text-align: right;
  font-weight: bold;
}

.number {
  font-size: 24px;
}
</style>
