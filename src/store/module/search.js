import {make} from "vuex-pathify";

const state = {
    page: 1,
    pageSize: 20,
    params: [
        {field: 'name', value: 'DaiN'},
    ],
    sort: 'asc'
}

const mutations = make.mutations(state)

export default {
    state,
    mutations
}