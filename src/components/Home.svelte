<script>
    import Select from "./Interactibles/Select.svelte";
    import TextInput from "./Interactibles/TextInput.svelte";
    import { workoutData } from "../localStore/workoutStore";
import Workout from "./Modules/Workout.svelte";

    const { workouts } = $workoutData;
</script>
<div class="home">
    <header 
        class="[ under-border ] [ flex aling-items-center justify-content-space-between gap-2 ]" 
        data-flex-collapse='center'>
        <h2>Workouts</h2>
        <div class="[ controls ] [ flex align-items-center gap-1 ]">
            <TextInput label='Search workout' />
            <Select  list={['Any', 'Upper body', 'Lower body']} />

            <a href="/add" class="[ button ] [ margin-inline-start-2 ]">New</a>
        </div>
    </header>

    <div class="[ workouts ] [ flex-direction-column gap-1 margin-block-1 ]">
        {#if workouts.length === 0}
            <p class="[ text-center margin-block-5 fs-600 ]">No workouts!</p>
        {:else}
            {#each workouts as workout}
                <Workout props={workout} />
            {/each}
        {/if}

    </div>
</div>