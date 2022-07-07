<script lang='ts'>
    import { createCubeCSSClass } from "../../utils/funcs";


    export let cubeClass: import("src/types").Props_Element = {
        blockClass: '',
        utilClass: '',
        compostClass: '',
    };
    export let dropdownState = false;
</script>

<ul 
    class={createCubeCSSClass(cubeClass, { 
    compostClass: 'dropdown', utilClass: 'flex-direction-column border-radius-cubed' 
    })}
    data-dropdown-state={dropdownState}
    >
    <slot></slot>
</ul>