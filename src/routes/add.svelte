<script lang='ts'>
    import Button from "../components/Interactibles/Button.svelte";
    import Select from "../components/Interactibles/Select.svelte";

    function handleSelect(e: any) {
        workoutType = e.detail.text
    }

    let workoutType = 'Any';
    let exercises = [] as any[];
    let exercise = {} as any;
    let showInput = false;

    let exercisesEl: HTMLElement;
</script>

<section class="add">
    <header class="[ under-border ] [ text-center margin-block-end-1 ]">
        <h2>{ workoutType } Workout 1</h2>
    </header>
    <div>
        <p class="[ flex gap-1 align-items-center ]">
            Workout type: <Select on:message={handleSelect} list={['Any', 'Upper body', 'Lower body']} />
        </p>

        <div class="exercises">
            {#each exercises as exercise}
                <p>lol</p>
            {/each}
        </div>

        {#if showInput}
            <p>input</p>
        {/if}

        <Button 
            on:click={() => showInput = !showInput}
            cubeClass={{ utilClass: 'width-100 margin-block-start-2' }}>
            Add exercise
        </Button>
    </div>
</section>