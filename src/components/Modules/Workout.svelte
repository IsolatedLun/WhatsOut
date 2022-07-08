<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    import { ICON_TRASH } from "../../consts";
    import type { Props_Workout } from "../../localStore/types";
    import Button from "../Interactibles/Button.svelte";
    import Exercise from "./Exercise.svelte";
    import Icon from "./Icon.svelte";
    import ScaleTag from "./ScaleTag.svelte";

    function calculateVolume(): any {
        function getWeightNumeric(x: string) {
            let res = Number(x.split('-').reduce((a, b) => (Number(a) as any) + Number(b)));
            return res === 0 ? 1 : res;
        }

        let acc = 0;
        props.exercises.forEach(x => acc += x.reps * x.sets * getWeightNumeric(x.weight));

        return acc;
    }

    function dispatchRemoveWorkout() {
        dispatch('message', { idx: props.id });
    }


    export let props: Props_Workout = {
        id: 0,
        title: '',
        exercises: [],
        dateDone: new Date(),
    }

    const dispatch = createEventDispatcher();
    const volume = calculateVolume();
</script>

<details class="[ workout ] [ padding-1 padding-inline-2 border-radius-cubed ]">
    <summary class="[ flex aling-items-center justify-content-space-between ]">
        <h2>{ props.title } v{ props.id }</h2>

        <ScaleTag>{ volume } volume</ScaleTag>
    </summary>
    <div class="[ workout__exercises ] [ flex-direction-column padding-2 border-radius-cubed 
        margin-block-start-1 gap-1 ]">
        {#each props.exercises as exercise}
            <Exercise props={exercise} showDeleteBtn={false} />
        {/each}
    </div>

    <div class="[ workout__content ] [ margin-block-start-1 flex justify-content-end ]">
        <Button variant='red' on:click={dispatchRemoveWorkout}>
            <Icon>{ ICON_TRASH }</Icon>
        </Button>
    </div>
</details>