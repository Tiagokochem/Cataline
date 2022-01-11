<template>
  <ul>
    <li v-for="todo in $allTodos" :key="todo.id">
      {{todo.text}}
    </li>
  </ul>
   
  </template>

<script>
  export default{
    created: {
      this.$store.dispatch('fechTodos')
    },

    computed: {
      $allTodos(){
        return this.$store.getters.$allTodos
      },
      methods: {
        deleteTodo() {
        this.$store.dispatch('fechTodos', id)

        }
      }
    }
  }
</script>