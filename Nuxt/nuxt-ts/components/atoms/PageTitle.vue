<template>
    <h1 class="page-title">
        {{text}} <b> {{strong}} </b>
    </h1>
</template>

<script>
import Vue from 'vue'

export default Vue.extend{
    props: {
        text: {
            type: String,
            required: true
        },
        strong: {
            type: String,
            required: true
        }
    }

</script>

<style lang="scss" scoped>

</style>