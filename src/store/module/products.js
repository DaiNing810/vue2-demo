const state = {
  items: ['apple', 'system360']
}

const getters = {
  items(state) {
    return state.items;
  }
}

export default {
  state,
  getters
}
