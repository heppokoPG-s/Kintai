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
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title> プロジェクトファイル構成 </v-card-title>
                    <v-card-subtitle> 一部省略 </v-card-subtitle>
                    <v-card-text>
                        <p>
                            <strong
                                >拡張子が記載されているものはファイル,
                                記載されていないものはディレクトリ
                            </strong>
                        </p>
                        <ul>
                            <li>
                                node_module
                                <ul style="list-style-type: none">
                                    <li>省略</li>
                                </ul>
                            </li>
                            <li>
                                public
                                <ul style="list-style-type: none">
                                    <li>
                                        HTMLファイル, favionアイコンデータを格納
                                    </li>
                                </ul>
                            </li>
                            <li>
                                src
                                <ul style="list-style-type: none">
                                    <li>表示内容全般, 設定を格納</li>
                                    <ol>
                                        <li>assets</li>
                                        <ul style="list-style-type: none">
                                            <li>画像ファイル等を格納</li>
                                        </ul>

                                        <li>plugins</li>
                                        <ul style="list-style-type: none">
                                            <li>
                                                プラグイン設定ファイルを確認
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>vuetify.js</li>
                                            <ul style="list-style-type: none">
                                                <li>
                                                    Vuetifyで使用可能なエロを定義可能
                                                </li>
                                            </ul>
                                        </ul>

                                        <li>router</li>
                                        <ul style="list-style-type: none">
                                            <li>ルーティングに関する設定</li>
                                        </ul>
                                        <ul>
                                            <li>index.js</li>
                                            <ul style="list-style-type: none">
                                                <li>ルーティングを定義</li>
                                            </ul>
                                        </ul>

                                        <li>store</li>
                                        <ul style="list-style-type: none">
                                            <li>
                                                2画面以上で使用される情報を保持
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>index.js</li>
                                            <ul style="list-style-type: none">
                                                <li>
                                                    ナビゲーションメニューの項目等、共通で使用している情報を保持
                                                </li>
                                            </ul>
                                        </ul>

                                        <li>Views</li>
                                        <ul style="list-style-type: none">
                                            <li>
                                                表示する画面コンポーネントを設定
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Home</li>
                                            <ul style="list-style-type: none">
                                                <li>
                                                    ホーム画面に関するコンポーネントを格納
                                                </li>
                                                <ul>
                                                    <li>HomeView.vue</li>
                                                    <ul
                                                        style="
                                                            list-style-type: none;
                                                        ">
                                                        <li>
                                                            ホーム画面の表示を行う
                                                        </li>
                                                    </ul>
                                                    <li>SubView</li>
                                                    <ul
                                                        style="
                                                            list-style-type: none;
                                                        ">
                                                        <li>
                                                            ホーム画面に関するサブコンポーネントを格納
                                                        </li>
                                                        <ul>
                                                            <li>
                                                                SubComponent.vue
                                                            </li>
                                                            <ul
                                                                style="
                                                                    list-style-type: none;
                                                                ">
                                                                <li>
                                                                    ホーム画面の表示を行う
                                                                </li>
                                                            </ul>
                                                        </ul>
                                                    </ul>
                                                </ul>
                                            </ul>
                                        </ul>
                                        <li>App.vue</li>
                                        <ul style="list-style-type: none">
                                            <li>
                                                共通で使用しているコンポーネントを設定
                                            </li>
                                        </ul>
                                        <li>main.js</li>
                                        <ul style="list-style-type: none">
                                            <li>Vueの定義やマウントを設定</li>
                                        </ul>
                                    </ol>
                                </ul>
                            </li>
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
        title: "コーディング規則について",
    },
};
</script>
