<template>
  <div>
    <p>{{ c }}</p>
    <p>{{ abc }}</p>
    <p>loaded: {{ loaded }}
      <button @click="loaded = !loaded">toggle loaded</button>
    </p>
    <p>{{ items }}
      <button @click="addItem">add item</button>
    </p>
    <p>firstItem: {{ firstItem }}</p>
    <p>secondItemName: {{ secondItemName }} </p>
    <p>
      page: {{ page }}
      <button @click="page++">add page</button>
    </p>
  </div>
</template>

<script>
import {get, sync} from 'vuex-pathify'

export default {
  name: "Pathify",
  computed: {
    c: get('foo/bar@a.b.c'),
    abc: get('foo/bar@a.b.c'),
    loaded: sync('loaded'),
    items: get('products/items'),
    firstItem: get('products/items@0'),
    secondItemName: get('products/items@1.name'),
    ...sync('search/*')
  },
  created() {
    // const items = this.$store.state.items;
    // const items = this.$store.get('products/items')
    // const items = this.$store.getters.items
    // const items = this.$store.getters['products/items']
    // const items = this.$store.get('items');
    // console.log(items);
    const name = this.$store.get('products@items.0.name')
    console.log(name);
  },
  mounted() {
    setTimeout(() => {
      this.$store.set('products/items@1.name', 'system360')
    }, 2000)
  },
  methods: {
    addItem() {
      const items = [...this.items];
      items.push({id: 3, name: 'HP'})
      this.$store.set('products/items', items)
    }
  }
}
</script>

<style scoped>

</style>
