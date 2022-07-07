<script lang='ts'>
    import Button from "./Button.svelte";
    import TextInput from "./TextInput.svelte";
    import { createEventDispatcher } from 'svelte';
    import { ICON_CHECK } from "../../consts";
    import Icon from "../Modules/Icon.svelte";
    import { containsEmptyVal } from "../../utils/funcs";

    function setExercise() {
        if(isValid)
            dispatch('message', {
                ...exercise
            })
    }

    function cleanNumber(e: Event) {
        const target = e.target as HTMLInputElement;

        return Number(target.value);
    }

    function setName(e: Event) {
        const target = e.target as HTMLInputElement;
        exercise['name'] = target.value as string;
    }

    let exercise: import("src/routes/types").Props_Exercise = {
        id: 999,
        sets: 0,
        reps: 0,
        weight: 0,
        name: '',
        conversion: 'kg'
    };
    const dispatch = createEventDispatcher();

    $: isValid = containsEmptyVal(exercise);

</script>
<div class="[ exercise-input-container ] [ flex gap-1 ]">
    <TextInput label='Exercise name' on:input={setName} />

    <div class="[ exercise__numerics flex gap-2 ]">
        <TextInput label='Weight' on:input={(e) => exercise['weight'] = cleanNumber(e)} />
        <TextInput label='Sets' on:input={(e) => exercise['sets'] = cleanNumber(e)} />
        <TextInput label='Reps' on:input={(e) => exercise['reps'] = cleanNumber(e)} />
    </div>

    <Button variant='blue' workCondition={isValid} on:click={setExercise}>
        <Icon>{ ICON_CHECK }</Icon>
    </Button>
</div>