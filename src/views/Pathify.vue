<template>
  <div>
    <p>{{ c }}</p>
    <p>{{ abc }}</p>
    <p>loaded: {{ loaded }}
      <button @click="loaded = !loaded">toggle loaded</button>
    </p>
  </div>
</template>

<script>
import {get, sync} from 'vuex-pathify'

export default {
  name: "Pathify",
  data() {
    return {}
  },
  created() {
    // const items = this.$store.state.items;
    // const items = this.$store.get('products/items')
    // const items = this.$store.getters.items
    // const items = this.$store.getters['products/items']
    // const items = this.$store.get('items');
    // console.log(items);
  },
  computed: {
    c: get('foo/bar@a.b.c'),
    abc: get('foo/bar@a.b.c'),
    loaded: sync('loaded'),
  }
}
</script>

<style scoped>

</style>
