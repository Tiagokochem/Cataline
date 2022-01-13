<template>
  <div class="services">
      <Service title="Front End" description="Loren" />
      <Service title="Back End" description="Loren" />
      <Service title="Manutenção" description="Loren" />

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>