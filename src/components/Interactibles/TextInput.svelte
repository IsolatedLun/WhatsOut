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
    export let value: any = '';

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
        bind:value={value}
    />
    <label for={idLabel} class="[ fs-300 pos-absolute whitespace-nowrap border-radius-100vw ]">{ label }</label>
</div>