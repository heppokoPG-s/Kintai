<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-on:click="listClick">
                        テスト1
                    </v-list-item>
                    <v-list-item v-on:click="listClick">
                        テスト2
                    </v-list-item>
                    <v-list-item v-on:click="listClick">
                        テスト3
                    </v-list-item>
                    <v-list-item v-on:click="listClick">
                        テスト4
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <HelloWorld />
        </v-content>

        <v-footer app v-bind="localAttrs" :padless="padless">
            <v-card>
                <v-card-title>
                    test
                </v-card-title>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

    export default {
    name: 'Base' ,
    components: {
        HelloWorld,
    },
    data () {
        return {
            drawer: false
        }
    },
    methods:{
        listClick()
        {
            alert("Oh パモさん\n床の隙間の汚れWatch\nｶﾜｲｲ ｶﾜｲｲﾈ…");
        }
    }
}
</script>
