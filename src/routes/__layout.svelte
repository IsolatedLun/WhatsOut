<script>
import { toggleDropdowns } from "../utils/funcs";

    import Navbar from "../components/Navbar.svelte";
    import { onMount } from "svelte";
    import User from "../components/User.svelte";
    import { getWorkoutData } from "../localStore/workoutStore";

    onMount(() => {
        window.addEventListener('click', (e) => {
            toggleDropdowns(e, 'select')
        })

        getWorkoutData();
    })
</script>

<Navbar />

<main class="[ main-container ] [ margin-block-2 gap-2 margin-inline-auto ]" data-grid-collapse>
    <User />
    <slot></slot>
</main>