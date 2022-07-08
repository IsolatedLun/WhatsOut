<script lang='ts'>
    import { ICON_TRASH } from "../../consts";
    import { createEventDispatcher } from 'svelte';
    import type { Props_Exercise } from "src/routes/types";
    import Button from "../Interactibles/Button.svelte";
    import Icon from "./Icon.svelte";
import ScaleTag from "./ScaleTag.svelte";

    function removeExercise(idx: number) {
        dispatch('delete', {
            idx
        })
    }

    export let props: Props_Exercise = {
        id: -1,
        sets: 0,
        reps: 0,
        weight: '0',
        conversion: 'kg',
        name: ''
    }
    const dispatch = createEventDispatcher();
    export let showDeleteBtn = true;

    const totalReps = props.sets > 1 ? props.reps / 2 * props.sets : props.reps;
    const avgReps = props.sets > 1 ? Math.ceil((totalReps) / props.sets) : props.reps;
</script>

<div class="[ exercise-container ] [ flex gap-1 ]">
    <div class="[ exercise ] [ width-100 flex aling-items-center justify-content-space-between 
        padding-2 border-radius-cubed ]">
        <p>{ props.name }</p>
    
        <div class="[ tags ] [ flex align-items-center gap-1 ]">
            <ScaleTag>{ props.weight } { props.conversion }</ScaleTag>
            <ScaleTag>{ props.sets } sets</ScaleTag>
            <ScaleTag>{ totalReps } / <b>{ avgReps }μ*</b>reps</ScaleTag>
        </div>
    </div>
    
    {#if showDeleteBtn}
    <Button variant='red' on:click={() => props.id > -1 && removeExercise(props.id)}>
        <Icon>{ ICON_TRASH }</Icon>
    </Button>
    {/if}
</div>