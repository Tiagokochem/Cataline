<template>
    <div>
        <h1> {{ $route.params.id }}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { books } from '@/store'

    export default Vue.extend({
        async asyncData({params}){
            await books.show({id: params.id as any})
        }
        
    })
</script>

<style scoped>

</style>