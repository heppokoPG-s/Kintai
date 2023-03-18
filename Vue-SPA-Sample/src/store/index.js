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
        linkname: "home"
      },
      {
        name: "Vue.jsについて",
        icon: "mdi-vuejs",
        linkname: "vuejs"
      },
      {
        name: "Vuetifyについて",
        icon: "mdi-vuetify",
        linkname: "vuetify"
      },
      // {
      //   name: "ユーザー削除(工事中...)",
      //   icon: "mdi-account-hard-hat",
      //   linkname: "/"
      // },      {
      //   name: "情報登録(工事中...)",
      //   icon: "mdi-account-hard-hat",
      //   linkname: "/"
      // },      {
      //   name: "情報確認(工事中...)",
      //   icon: "mdi-account-hard-hat",
      //   linkname: "/"
      // },      {
      //   name: "各種設定(工事中...)",
      //   icon: "mdi-account-hard-hat",
      //   linkname: "/"
      // },
    ],
  },
});
