<template>
<p v-for="todo in doneTodos" :key="todo.text">
  {{ todo.text }}
</p>

<button @click="checkAllTodos">Finalizar</button>

 <button @click="increment">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo{
  text: string
  done: boolean
}

export default defineComponent({
    data: () {
      return {
       todos: [] as Todo[]
      }
    },
      computded: {
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.done)
    }
  },
    watch: {
      todos(newValue: Todo[]){
        const isFinished = !newValue.some(({done})=> !done)
     
      if(isFinished){
        alert('Boaaaaa!!!')
      }
    }
},
    created(){
      this.todos = [
  { text: 'Estudar Typescript', done: true },
  { text: 'Lavar os pratos', done: false },
  { text: 'Aprender Nuxt.js', done: true }
    ]
  },

  method: {
    checkAllTodos() {
      this.todos = this.todos.map(({text}) => {
        return {text, done: true}
      })
  }
  }
})
</script>


