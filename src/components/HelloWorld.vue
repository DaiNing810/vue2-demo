<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-replace="{str, $data}"></span>
    {{ getValueSafe('name.first.value') }}
    count:{{count}}
    <button @click="count++">add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: {},
      str: 'hello, {{name}}',
      count: 0
    };
  },
  directives: {
    replace(el, binding){
      console.log(el, binding);
    }
  },
  methods: {
    // 获取默认值, template 中使用 ?? 的替代方案
    getValueOrDefault(value, defaultValue) {
      return value ?? defaultValue;
    },
    // 获取安全值, template 中使用 ?. 的替代方案
    getValueSafe(expression) {
      const parts = expression.split('.');
      let value = null;
      parts?.forEach((part) => {
        value = value ? value?.[part] : this?.[part];
      });
      return value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
