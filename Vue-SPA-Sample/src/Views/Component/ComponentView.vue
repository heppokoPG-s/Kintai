<template>
    <v-container>
        <v-card>
            <v-card-title> コンポーネントについて </v-card-title>
            <v-card-text>
                本システムにインストールしているコンポーネントに関してまとめています
            </v-card-text>
        </v-card>
        <v-row class="mt-2">
            <v-col>
                <v-card>
                    <v-card-title> インストールコンポーネント </v-card-title>
                    <v-card-text>
                        <ul>
                            <li>Vue CLI@5.0.8</li>
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
        <v-row class="mt-2">
            <v-col>
                <v-card>
                    <v-card-title> Vue CLI </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>5.0.8</p>
                        <h4>機能</h4>
                        <p>Vue.jsを使用した開発環境の構築を行う</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title> Vue.js </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>2.7.14</p>
                        <h4>機能</h4>
                        <p>
                            ユーザーインターフェースの構築のためのJavaScriptフレームワーク
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title> Vuetify </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>2.6.14</p>
                        <h4>機能</h4>
                        <p>Vue.js上に構築された包括的なUIフレームワーク</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title> Vuex </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>3.6.2</p>
                        <h4>機能</h4>
                        <p>Vue.jsアプリケーションのための状態管理パターン+ライブラリ</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title> Vue Router </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>3.6.5</p>
                        <h4>機能</h4>
                        <p>Vue.jsでシングルページアプリケーションを構築ためのルーター</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title> Vue Meta </v-card-title>
                    <v-card-text>
                        <h4>インストールバージョン</h4>
                        <p>2.4.0</p>
                        <h4>機能</h4>
                        <p>Vue.jsの内蔵リアクティビティを利用し、アプリのメタデータを管理する</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    metaInfo: {
    title: 'コンポーネントについて',
  },
};
</script>
