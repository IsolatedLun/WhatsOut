<script lang="ts">
    import Dropdown from "../Modules/Dropdown.svelte";
    import Button from "./Button.svelte";
    import { createEventDispatcher } from 'svelte';

    function selectValue(val: string) {
        dispatch('message', {
            text: val
        })
    }

    export let list: string[] = [''];
    
    const dispatch = createEventDispatcher();
    let dropdownState = false;
</script>

<Button 
    on:click={() => dropdownState = !dropdownState}
    cubeClass={{ utilClass: 'pos-relative padding-1', compostClass: 'select' }} 
    variant='select'
    >
    <p class="[ fs-400 flex align-items-center gap-1 ]">
        Type 
        <span class="[ fs-600 icon ]">{'\uf0d7'}</span>
    </p>

    <Dropdown 
        cubeClass={{ blockClass: 'select__list', utilClass: 'pos-absolute' }}
        dropdownState={dropdownState}
        >
        {#each list as item}
            <li>
                <Button 
                    on:click={() => selectValue(item)}
                    variant='empty' 
                    cubeClass={{ utilClass: 'fs-400 whitespace-nowrap' }}>
                    { item }
                </Button>
            </li>
        {/each}
    </Dropdown>
</Button>