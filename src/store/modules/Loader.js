import Vue from 'vue'
const namespaced = true;

const state = {
    statType: null,
    db: {
        面積: { file: "shizen", keys: "area", fields: "menseki" },
        可住面積: { file: "shizen", keys: "area", fields: "kajuu" },
        人口総数: { file: "jinkou", keys: "area", fields: "jinkou" },
        人口_男: { file: "jinkou", keys: "area", fields: "otoko" },
        人口_女: { file: "jinkou", keys: "area", fields: "onna" }
    },
    targetFields: null,
    dataRecords: null
};

const mutations = {
    'CHANGE_statType'(state, newStatType) {
        state.statType = newStatType;
        var targetFile = state.db[state.statType].file;
        var dataRecords = require("@/assets/" + targetFile + ".json");
        state.targetFields = state.db[state.statType].fields;
        var keyFields = state.db[state.statType].keys;
        dataRecords = dataRecords.filter(function (item, index) {
            if (item.year == "2015年度") return true;
        });
        state.dataRecords = dataRecords;
    },
};

const actions = {
    setStatType: ({ commit }, statType) => {
        console.log("new!", statType);
        commit('CHANGE_statType', statType);
    }
};

const getters = {
    currentStatType: state => {
        return state.statType;
    },
    targetFields: state => {
        return state.targetFields
    },
    dataRecords: state => {
        return state.dataRecords
    },
    dataset: state => {
        if (!state.statType) return null;
        var keyFields = state.db[state.statType].keys;
        var targetFields = state.db[state.statType].fields;

        var ds = {
            "keys": keyFields,
            "fields": targetFields,
            "data": state.dataRecords
        }
        return ds
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}