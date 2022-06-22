const state = {
  bar: {
    a: {
      b: {
        c: [1, 2, 3]
      }
    },
    // 'a.b.c': 'some value' // 写法错误，会导致不能访问到该属性（考虑使用自定义映射或者覆盖getters）
  }
}

export default {
  state
}
