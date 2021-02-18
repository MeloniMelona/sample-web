<template>
    <v-app>
        <v-navigation-drawer
            app
            v-model="drawer"
        >
            <v-list-item to="/">
                <v-list-item-content>
                    <v-list-item-title class="title">Application</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item to="/dashboard">
                    <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/apis">
                    <v-list-item-icon><v-icon>mdi-api</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>API</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/menus">
                    <v-list-item-icon><v-icon>mdi-dots-vertical</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Menu</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/people">
                    <v-list-item-icon><v-icon>mdi-account-box</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Person</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/users">
                    <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>User</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense>
            <v-app-bar-nav-icon @click="drawer = !drawer;"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-fade-transition hide-on-leave>
                <router-view></router-view>
            </v-fade-transition>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    "data": () => ({
        "drawer": null
    })
});
</script>

<style scoped>
</style>