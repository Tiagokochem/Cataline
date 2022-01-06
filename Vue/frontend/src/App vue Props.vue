<template>
    <button :class="['button-styled', color]"> Botão estilizado

        {{ text }}
        {{ user }}
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type color  = 'sucess' | 'danger' | 'primaty'

interface User{
    id: number
    name: string
}

export default defineComponent({
    props: {
        text: {
            type: [String, Number],
            required: true
        },
        color: {
            type: Sting,
            default: 'primary',
            validator: (value: color) => {
                return ['sucess', 'danger', 'primary'].includes(value)
            }
        },
        user: {
            type: Objetct as PropType<User>,
            required: true
        }

    }
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>