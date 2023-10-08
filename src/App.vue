<template>
  <KubaturnikComponent />
</template>

<script>
import KubaturnikComponent from "@/components/kubaturnik/KubaturnikComponent";

export default {
  name: 'App',
  components: {KubaturnikComponent},
}
</script>

<style>
body {
  margin:0;
}
* {
  box-sizing: border-box;
}
</style>
