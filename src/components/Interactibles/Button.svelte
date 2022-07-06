<script lang='ts'>
    import { createCubeCSSClass } from "../../utils/funcs";


    export const props: import("src/types").Props_Element = {
        blockClass: '',
        utilClass: '',
        compostClass: '',
    };
</script>

<button 
    class={createCubeCSSClass(props, { compostClass: 'button' })}
    
    data-variant='option'
    on:click
    >
    <slot></slot>
</button>