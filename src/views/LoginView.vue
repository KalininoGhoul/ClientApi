<template>
    <form ref="loginForm">
        <label for="login">Login</label><br>
        <input type="text" name="login" id="login"><br><br>
        <label for="password">password</label><br>
        <input type="text" name="password" id="password"><br><br>
        <button @click.prevent="sendForm">Log In</button>
    </form>
    <p>Don’t have an account? <router-link :to="{name: 'reg'}">Sign up</router-link>.</p>  
    <ErrorMessage v-if="error" :error="error" />
    <SuccessMessage v-if="success" />
</template>

<script>
    import axios from 'axios';
    import {fetchData} from '@/components/mixins/fetchData.js';
    import setToken from '@/helpers/setToken.js';
    import ErrorMessage from '@/components/ErrorMessage.vue';
    import SuccessMessage from '@/components/SuccessMessage.vue';

    export default {
        name: "LoginView",
        methods: {
            sendForm() {
                const data = new FormData(this.$refs.loginForm);
                axios.post("login", data)
                    .then(res => this.login(res))
                    .catch(res => this.errorHandler(res));
            },
            login(res) {
                setToken(res.data.data.user_token);
                this.success = true;
                this.$router.push({name: 'home'});
            },
        },
        mixins: [fetchData],
        components: {
            ErrorMessage, 
            SuccessMessage 
        }
    }
</script>

<style scoped>
    
</style>