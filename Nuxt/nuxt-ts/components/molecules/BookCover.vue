<template>
    <div class="book-cover">
        <img :src="book.cover" :alt="`Capa do livro ${book.title} ` " />
        <NuxtLink class="read-book" :to="`/book/${book.id}/read`">
        Ler Livro
         </NuxtLink>

  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
        import { books } from '@/store'


    export default Vue.extend({
        $book(){
            return books.$single
        }
    })
</script>

<style scoped>

</style>