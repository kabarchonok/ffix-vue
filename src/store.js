import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        page: 'main',
    },

    mutations: {
        updatePage(state, payload) {
            state.page = payload
        }
    },

    actions: {}
})
