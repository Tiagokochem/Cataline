import { createApp} from 'vue'
import Todo from "./src/api/todos";
import assets from "./assets/css/main.css"

const apiTodos = new Todos()

const app = createApp({
  data(){
    return {
      todos: [],
      form: {
        text: '',
        done: false
      },
    }
  },
  created(){
    this.fetchTodos()
  }.
  methodos: {
    async fetchTodos(){
      this.todos = await apiTodos.index()
    },
    async createTodo(){
      const data = apiTodos.store({this.form})
      this.todos.push(data)

      this.form.text = ''
      this.form.done = false
    },
    async toggleTodoStatus(todo){
     const data = await apiTodos.update({
        ...todo,
        done: !todo.done 
      })
      const index = this.todos.findIndex(({id}) => id == data.id )
      this.todos [index] = data
    },
    async destroyTodo(){
      await apiTodos.destroy({id})

      const index = this.todos.findIndex(todo) => todo.id == id)
      this.todos.splice(index, 1)
    }
    },
  },
})

api.mount('#app')

<li class="todo">
  <label class="checkbox-input">
    <input type="checkbox" checked="true" />
    <span class="checkmark"></span>
  </label>
  <span class="todo-text">Lavar Roupa</span>
  <a class="todo-delete"></a>
</li>

async function exec(){
    const response = await todos.index()
    
    const ul = document.querySelector('ul.todos')

    todos.forEach(todo) => {
      
    });
}

exec()