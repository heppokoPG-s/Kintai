<template>
    <v-app>
        <v-navigation-drawer
            v-model="$store.state.drawer"
            app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Vue.jsサンプルサイト
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        各プロダクトへのアクセス
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                shaped
                nav>
                <v-list-item
                    v-for="item in $store.state.navigation"
                    link
                    :key="item.name"
                    color="#0394fc"
                    :to="{ name: item.linkname }">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="primary"
            dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                    @click="$store.state.drawer = !$store.state.drawer" />
                <v-app-bar-title> </v-app-bar-title>
            </div>
        </v-app-bar>

        <v-main>
            <Transition mode="out-in">
                <router-view />
            </Transition>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({}),

    metaInfo: {
        title: "ベースページ",
        titleTemplate: "%s | Vue.jsサンプルシステム",
    },
};
</script>

<style>
.v-enter {
    transform: translate(-100px, 0);
    opacity: 0;
}

.v-enter-to {
    opacity: 1;
}

.v-enter-active {
    transition: all 1s 0s ease;
}

.v-leave {
    transform: translate(0, 0);
    opacity: 1;
}

.v-leave-to {
    transform: translate(-100px, 0);
    opacity: 0;
}

.v-leave-active {
    transition: all 0.5s 0s ease;
}
</style>
