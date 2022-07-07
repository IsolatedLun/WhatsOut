<script lang='ts'>
    import { createCubeCSSClass } from "../../utils/funcs";


    export let cubeClass: import("src/types").Props_Element = {
        blockClass: '',
        utilClass: '',
        compostClass: '',
    };
    export let variant = 'default';
</script>

<span 
    class={createCubeCSSClass(cubeClass, { compostClass: 'icon' })}
    
    data-variant={variant}
    on:click
    >
    <slot></slot>
</span>