import { Directive } from "vue"

const highlight: Directive = {

    beforeMount(el: HTMLElement, binding){
        if (binding.arg === 'backgound'){
            el.style.backgound = binding.value
        } else{
            el.style.color = binding.value
        }
        if(binding.modifiers.shadow){
            el.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)'
        }
    }
}
}

export default highlight