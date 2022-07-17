<script lang='ts'>
    import Select from "./Interactibles/Select.svelte";
    import TextInput from "./Interactibles/TextInput.svelte";
    import { removeWorkoutData, workoutData } from "../localStore/workoutStore";
    import Workout from "./Modules/Workout.svelte";
    import { onMount } from "svelte";
    import type { Props_Idx } from "src/types";
    import Icon from "./Modules/Icon.svelte";
    import { ICON_PLUS } from "../consts";

    function handleRemoveWorkout(e: CustomEvent<Props_Idx>) {
        removeWorkoutData(e.detail.idx);
    }

    onMount(() => {
        workoutData.subscribe((e) => {
            workouts = e.workouts;
        })
    })

   let workouts: import("../localStore/types").Props_Workout[] = [];
</script>
<div class="home">
    <header 
        class="[ under-border ] [ flex aling-items-center justify-content-space-between gap-2 ]" 
        data-flex-collapse='center'>
        <h2>{ workouts.length } { workouts.length > 1 ? 'Workouts': 'Workout' }</h2>
        <div class="[ controls ] [ flex align-items-center gap-1 ]">
            <TextInput label='Search workout' />
            <Select  list={['Any', 'Upper body', 'Lower body']} />

            <a href="/add" class="[ button ] [ margin-inline-start-2 ]">
                New <Icon>{ ICON_PLUS }</Icon>
            </a>
        </div>
    </header>

    <div class="[ workouts ] [ flex-direction-column gap-1 margin-block-1 ]">
        {#if workouts.length === 0}
            <p class="[ text-center margin-block-5 fs-600 ]">No workouts!</p>
        {:else}
            {#each workouts as workout}
                <Workout props={workout} on:message={handleRemoveWorkout} />
            {/each}
        {/if}

    </div>
</div>