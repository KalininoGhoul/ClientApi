<template>
    <div class="error">
        <p>{{ error.code }} | {{ error.message }}</p>

        <p v-for="(err, key, index) in error.errors"
        :key="index">
            {{ key }}: {{ err[0] }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ErrorMessage',
        props: {
            error: Object,
        }
    }
</script>