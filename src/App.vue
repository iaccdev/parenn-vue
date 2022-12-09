<template>
    <div id="app">
        <component v-bind:is="layout"></component>
    </div>
</template>
<script>
import OnlineStoreLayout from './layouts/OnlineStoreLayout';
import AdminPanelLayout from './layouts/AdminPanelLayout';
export default {
    computed: {
        layout() {
            return this.$store.getters.layout;
        }
    },
    components: {
        'online-store-layout': OnlineStoreLayout,
        'admin-panel-layout': AdminPanelLayout
    }
}
</script>
<style>
</style>