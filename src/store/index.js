import {createStore} from 'vuex'

import api from '@/api/kubaturnik'

export default createStore({
    state: {
        items: [],
    },
    getters: {
        // table: () => api.getTable(),
    },
    mutations: {
        setItems(state, items) {
            state.items = items || [];
        },
    },

    actions: {
        async load({commit}) {
            commit('setItems', await api.load())
        },
        async addItem({commit}, {d, v, q}) {
            await api.add(d, v, q);
            commit('setItems', await api.load())
        },
        async updateItem({commit}, item) {
            await api.update({...item});
            commit('setItems', await api.load())
        },
        async removeItem({commit}, itemId) {
            await api.remove(itemId);
            commit('setItems', await api.load())
        },
        async clear({commit}) {
            await api.clear();
            commit('setItems', [])
        }
    },

    modules: {}
})
