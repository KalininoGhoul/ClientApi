<template>
    <ErrorMessage v-if="error" :error="error" />
    <table border="1">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Login</th>
            <th>Status</th>
            <th>Group</th>
        </thead>
        <tbody>
            <tr v-for="(user, _, index) in users"
                :key="index">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.login}}</td>
                <td>{{user.status}}</td>
                <td>{{user.group}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import axios from 'axios';
    import {fetchData} from '@/components/mixins/fetchData';
    import ErrorMessage from '@/components/ErrorMessage.vue';

    export default {
        name: 'UserView',
        data() {
            return {
                users: [],
            }
        },
        beforeCreate() {
            axios.get('user')
                .then(res => this.showUsers(res))
                .catch(res => this.errorHandler(res));
        },
        methods: {
            showUsers(res) {
                this.users = res.data.data;
            }
        },
        mixins: [fetchData],
        components: {
            ErrorMessage,
        }
    }
</script>