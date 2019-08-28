import Vue from 'vue';

const namespaced = true;

const state = {
    count: 0
};

const mutations = {
    'CHANGE_COUNT'(state) {
        state.count = state.count + 1;
    },
};

const actions = {
    plusCount: ({ commit }) => {
        commit('CHANGE_COUNT');
    }
};

const getters = {
    currentCount: state => {
        return state.count;
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}