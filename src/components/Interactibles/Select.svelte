<script lang="ts">
    import Dropdown from "../Modules/Dropdown.svelte";
    import Button from "./Button.svelte";
    import { createEventDispatcher } from 'svelte';
    import Icon from "../Modules/Icon.svelte";
    import { ICON_CARET_DOWN } from "../../consts";

    function selectValue(val: string) {
        dispatch('message', {
            text: val
        })

        selected = val;
    }

    export let list: string[] = [''];
    
    const dispatch = createEventDispatcher();
    let dropdownState = false;
    let selected = list[0];
</script>

<Button 
    on:click={() => dropdownState = !dropdownState}
    cubeClass={{ utilClass: 'pos-relative padding-1', compostClass: 'select' }} 
    variant='select'
    >
    <p class="[ fs-400 flex align-items-center gap-1 ]">
        Type: {selected} <Icon>{ ICON_CARET_DOWN }</Icon>
    </p>

    <Dropdown 
        cubeClass={{ blockClass: 'select__list', utilClass: 'pos-absolute' }}
        dropdownState={dropdownState}
        >
        {#each list as item}
            <li on:click={() => selectValue(item)}>
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