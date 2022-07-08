<script>
import { toggleDropdowns } from "../utils/funcs";

    import Navbar from "../components/Navbar.svelte";
    import { onMount } from "svelte";
    import User from "../components/User.svelte";
    import { getWorkoutData, workoutData } from "../localStore/workoutStore";

    onMount(() => {
        window.addEventListener('click', (e) => {
            toggleDropdowns(e, 'select')
        })

        getWorkoutData();

        workoutData.subscribe((e) => {
            localStorage.setItem('workout-data', JSON.stringify(e));
        })
    })
</script>

<Navbar />

<main class="[ main-container ] [ margin-block-2 gap-2 margin-inline-auto ]" data-grid-collapse>
    <User />
    <slot></slot>
</main>