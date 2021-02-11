<template>
    <v-container fluid>
        <h1>Users</h1>
        <v-select
            label="Names"
            :items="names"
            :loading="namesLoading"
        ></v-select>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    "data": () => ({
        "drawer": null,
        "message": "Hello World!",
        "names": [],
        "namesLoading": false
    }),
    "methods": {
        "getNames": (): Promise<Array<string>> => {
            return new Promise((resolve, reject) => {
                window.setTimeout(() => {
                    let names: Array<string> = ["박진수", "박영준"];
                    resolve(names);
                }, 3000);
            });
        }
    },
    "mounted": async function () {
        this.namesLoading = true;
        let names: Array<string> = await this.getNames();
        this.names = names;
        this.namesLoading = false;
        console.log(names);
        console.log(Symbol("test"));
    }
});
</script>

<style scoped>
</style>