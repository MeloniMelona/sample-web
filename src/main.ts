import "core-js";
import "regenerator-runtime";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuetify from "vuetify";

import App from "/src/App.vue";
import DefaultLayout from "/src/layouts/Default.vue";
import BlankLayout from "/src/layouts/Blank.vue";
import ApiMainPage from "/src/pages/api/main.vue";
import MenuMainPage from "/src/pages/menu/main.vue";
import PersonMainPage from "/src/pages/person/main.vue";
import UserMainPage from "/src/pages/user/main.vue";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
    "el": '#app',
    "render": h => h(App),
    "vuetify": new Vuetify({
        "theme": {
            "dark": true
        }
    }),
    "router": new VueRouter({
        "mode": "history",
        "routes": [
            {
                "path": "/",
                "component": DefaultLayout,
                "children": [
                    {
                        "path": "/apis",
                        "component": ApiMainPage
                    },
                    {
                        "path": "/menus",
                        "component": MenuMainPage
                    },
                    {
                        "path": "/people",
                        "component": PersonMainPage
                    },
                    {
                        "path": "/users",
                        "component": UserMainPage
                    }
                ]
            },
            {
                "path": "/sign-in",
                "component": BlankLayout
            }
        ]
    })
});