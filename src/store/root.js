import {make} from 'vuex-pathify'

const state = {
    items: [1, 3,], loaded: true
}

const mutations = make.mutations(state)

export default {
    state, mutations
}
