<template>
    <form ref="regForm">
        <label for="name">Name</label><br>
        <input type="text" name="name" id="name"><br><br>
        <label for="login">Login</label><br>
        <input type="text" name="login" id="login"><br><br>
        <label for="password">password</label><br>
        <input type="password" name="password" id="password"><br><br>
        <label for="role"></label>
        <select name="role_id" id="role">
            <!-- ??????? -->
            <!-- Откуда брать роли -->
            <option value="1">Админ</option>
            <option value="2">Официант</option>
            <option value="3">Повар</option>
        </select>
        <br><br>
        <button @click.prevent="sendForm">Submit</button>
    </form>
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
        name: "RegView",
        methods: {
            sendForm() {
                this.success = false;
                this.error = null;

                const data = new FormData(this.$refs.regForm);
                const config = {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('user_token'),
                    },
                };
                axios.post("user", data, config)
                    .then(res => this.reg(res))
                    .catch(res => this.errorHandler(res));
            },
            reg(res) {
                setToken(res.data.data.user_token);
                this.success = true;
            },
        },
        mixins: [fetchData],
        components: { 
            ErrorMessage,
            SuccessMessage
        }
    }
</script>