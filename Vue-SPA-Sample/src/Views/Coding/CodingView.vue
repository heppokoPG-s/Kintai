<template>
    <v-container>
        <v-card>
            <v-card-title> コーディング規則 </v-card-title>
            <v-card-text>
                本システムコーディング規則に関してまとめています
            </v-card-text>
        </v-card>
        <v-row class="mt-2">
            <v-col>
                <v-card>
                    <v-card-title> 基本ルール </v-card-title>
                    <v-card-text>
                        <ul>
                            <li>フォーマットを実行すること</li>
                            <li>フォーマッタは"Prettier"を使用すること</li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col>
                <v-card>
                    <v-card-title>
                        使用ツール(npm installを実行すること)
                    </v-card-title>
                    <v-card-text>
                        <ul>
                            <li>Vue/CLI@5.0.8</li>
                            <li>Vue.js@2.7.14</li>
                            <li>Vuetify@2.6.14</li>
                            <li>Vuex@3.6.2</li>
                            <li>Vue-Router@3.6.5</li>
                            <li>vue-meta@2.4.0</li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    metaInfo: {
    title: 'コーディング規則について',
  },
};
</script>
