import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: null,
        navigation: [
            {
                name: "ホーム",
                icon: "mdi-view-dashboard",
                linkname: "home",
            },
            {
                name: "Vue.jsについて",
                icon: "mdi-vuejs",
                linkname: "vuejs",
            },
            {
                name: "Vuetifyについて",
                icon: "mdi-vuetify",
                linkname: "vuetify",
            },
            {
                name: "コンポーネントについて",
                icon: "mdi-information",
                linkname: "component",
            },
            {
                name: "コーディング規則について",
                icon: "mdi-pencil-ruler",
                linkname: "code",
            },
            {
                name: "情報確認(工事中...)",
                icon: "mdi-account-hard-hat",
                linkname: "/",
            },
            // {
            //   name: "各種設定(工事中...)",
            //   icon: "mdi-account-hard-hat",
            //   linkname: "/"
            // },
        ],
    },
});
