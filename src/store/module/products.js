import {make} from "vuex-pathify";

const state = {
    items: [
        {id: 1, name: 'apple'},
        {id: 2, name: 'IBM'},
    ],
    color: 'red',
    person: {name: 'DaiN', age: 40}
}

const mutations = make.mutations(state)

export default {
    state,
    mutations
}
