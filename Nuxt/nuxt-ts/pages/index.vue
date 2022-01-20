<template>
<HomeTemplate />

  </div>
</template>

<script lang="ts">
  import Vue from 'Vue' 
  import { books } from '@/store'
   export default Vue.extend({
    layout: 'ibook'
    asyncData(){
      console.log(books.books[0].id)
    }
  })
</script>

<style scoped>

</style>