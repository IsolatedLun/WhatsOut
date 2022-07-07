<script lang='ts'>
    import type { Props_Workout } from "../../localStore/types";
    import Exercise from "./Exercise.svelte";


    export let props: Props_Workout = {
        title: '',
        exercises: []
    }

    function calculateVolume(): number {
        return props.exercises.reduce((a, b) => ((a.reps * a.sets) + (b.reps * b.sets) as any)) as any;
    }

    console.log(calculateVolume())

</script>

<details class="[ workout ] [ padding-1 padding-inline-2 border-radius-cubed ]">
    <summary>
        <h2>{ props.title }</h2>
    </summary>
    <div class="[ workout__exercises ] [ flex-direction-column padding-2 border-radius-cubed 
        margin-block-start-1 gap-1 ]">
        {#each props.exercises as exercise}
            <Exercise props={exercise} showDeleteBtn={false} />
        {/each}
    </div>
</details>