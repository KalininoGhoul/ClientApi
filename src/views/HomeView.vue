<template>
    <p><router-link :to="{name: 'login'}">Log In</router-link> | <router-link :to="{name: 'reg'}">Sign Up</router-link></p>
    <p v-if="auth"><button @click="logout">Log Out</button></p>
    <h1><router-link :to="{name: 'users'}">All Users</router-link></h1>  
</template>

<script>
    import removeToken from '@/helpers/removeToken.js';

    export default {
        name: 'HomeView',
        computed: {
            auth() {
                return localStorage.getItem('user_token') 
                ? true : false;
            }
        },
        methods: {
            logout() {
                removeToken();
                location.reload();
            }
        }
    }
</script>