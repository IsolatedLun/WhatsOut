<script lang='ts'>
    import ExerciseInput from "../components/Interactibles/ExerciseInput.svelte";
    import Button from "../components/Interactibles/Button.svelte";
    import Select from "../components/Interactibles/Select.svelte";
    import type { Props_Exercise } from "./types";
    import Exercise from "../components/Modules/Exercise.svelte";
    import type { Props_Idx } from "src/types";
    import Icon from "../components/Modules/Icon.svelte";
    import { addWorkoutData, workoutData } from "../localStore/workoutStore";
import { onMount } from "svelte";

    function handleSelect(e: any) {
        workoutType = e.detail.text
    }

    function handleAddExercise(e: CustomEvent<Props_Exercise>) {
        exercises = [...exercises, { ...e.detail, id: exercises.length }];
        showInput = false;
    }

    function handleRemoveExercise(e: CustomEvent<Props_Idx>) {
        exercises = [...exercises.filter(ex => ex.id !== e.detail.idx)]
    }

    onMount(() => {
        workoutData.subscribe((e) => {
            workoutId = e.workouts.length + 1
        })
    })

    let workoutType = 'Any';
    let exercises = [] as Props_Exercise[];
    let showInput = false;
    let workoutId = 0;

</script>

<section class="add">
    <header class="[ under-border ] [ text-center margin-block-end-1 ]">
        <h2 class="[ fw-normal ]">{ workoutType }</h2>
    </header>
    <div>
        <p class="[ flex gap-1 align-items-center ]">
            Workout type: <Select on:message={handleSelect} list={['Any', 'Upper body', 'Lower body']} />
        </p>

        <div class="[ exercises ] [ flex-direction-column gap-1 margin-block-start-2 ]">
            {#each exercises as exercise}
                <Exercise on:delete={handleRemoveExercise} props={exercise} />
            {/each}
        </div>

        {#if showInput}
            <div class="margin-block-start-2">
                <ExerciseInput on:message={handleAddExercise} />
            </div>
        {/if}

        <Button 
            on:click={() => showInput = !showInput}
            cubeClass={{ utilClass: 'width-100 margin-block-start-2' }}>
            {#if showInput}
            Close
            {/if}
            {#if !showInput}
                <Icon>{'\uf067'}</Icon>
            {/if}
        </Button>

        <Button 
            variant='blue'
            secondaryVariant='padding-thick'
            workCondition={exercises.length > 0}
            on:click={() => addWorkoutData({
                id: workoutId,
                exercises,
                dateDone: new Date(),
                title: workoutType
            })}
            cubeClass={{ utilClass: 'margin-block-start-2' }}>
            Add workout
        </Button>
    </div>
</section>