<script lang='ts'>
    import { createCubeCSSClass } from "../../utils/funcs";

    function cleanLabelText(x: string) {
        return x.split(' ').length > 0 ? x.split(' ')[1] : x;
    }

    export let cubeClass: import("src/types").Props_Element = {
        blockClass: '',
        utilClass: '',
        compostClass: '',
    };
    export let label = 'Enter Text';

    const idLabel = cleanLabelText(label);
</script>

<div class="[ input-container ] [ pos-relative ]">
    <input 
        id={idLabel}
        class={createCubeCSSClass(cubeClass, { compostClass: 'input' })}
        placeholder=""

        data-variant='default'
        type='text'
        on:input
    />
    <label for={idLabel} class="[ fs-300 pos-absolute ]">{ label }</label>
</div>