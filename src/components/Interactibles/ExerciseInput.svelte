<script lang='ts'>
    import Button from "./Button.svelte";
    import TextInput from "./TextInput.svelte";
    import { createEventDispatcher } from 'svelte';
    import { ICON_CHECK } from "../../consts";
    import Icon from "../Modules/Icon.svelte";
    import { capitalizeText, containsEmptyVal, isPunctionalNumeric } from "../../utils/funcs";

    function setExercise() {
        if(isValid)
            dispatch('message', {
                ...exercise, sets: setAmt
            })
    }

    function cleanNumber(e: Event) {
        const target = e.target as HTMLInputElement;

        return Number(target.value);
    }

    function setName(e: Event) {
        const target = e.target as HTMLInputElement;
        exercise['name'] = capitalizeText(target.value) as string;
    }

    function setWeight(e: Event) {
        const target = e.target as HTMLInputElement;
        exercise['weight'] = target.value as string;
    }

    let exercise: import("src/routes/types").Props_Exercise = {
        id: 999,
        sets: 0,
        reps: 0,
        weight: '',
        name: '',
        conversion: 'kg'
    };
    const dispatch = createEventDispatcher();

    $: isValid = containsEmptyVal({ ...exercise, sets: setAmt }, { 'weight': [isPunctionalNumeric] } as any);
    $: setAmt = exercise.weight.includes('-') ? exercise.weight.split('-').length : 1;
</script>

<div class="[ exercise-input-container ] [ flex gap-1 ]" data-flex-collapse>
    <TextInput label='Exercise name' on:input={setName} />

    <div class="[ exercise__numerics flex gap-2 ]" data-flex-collapse>
        <TextInput label='Weight' on:input={setWeight} />
        <TextInput label='Sets' value={setAmt} on:input={(e) => exercise['sets'] = cleanNumber(e)} />
        <TextInput label='Total reps' on:input={(e) => exercise['reps'] = cleanNumber(e)} />
    </div>

    <Button variant='blue' workCondition={isValid} on:click={setExercise}>
        <Icon>{ ICON_CHECK }</Icon>
    </Button>
</div>