<script lang='ts'>
    import { createCubeCSSClass } from "../../utils/funcs";


    export let cubeClass: import("src/types").Props_Element = {
        blockClass: '',
        utilClass: '',
        compostClass: '',
    };
    export let variant = 'default';
    export let secondaryVariant = 'default';
    export let workCondition = true;
</script>

<button 
    class={createCubeCSSClass(cubeClass, { compostClass: 'button' })}
    
    data-variant={variant}
    data-secondary-variant={secondaryVariant}
    data-work-condition={workCondition}
    on:click
    >
    <slot></slot>
</button>