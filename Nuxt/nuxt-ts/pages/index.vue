<template>
<HomeTemplate />

  </div>
</template>

<script lang="ts">
  import Vue from 'Vue' 
  import { books } from '@/store'
   export default Vue.extend({
    layout: 'ibook'
    async asyncData(){
     await books.indes()
    }
  })
</script>

<style scoped>

</style>