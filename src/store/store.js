import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import loader from "./modules/Loader";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter: counter,
        loader: loader
    }
});