<script>
import { toggleDropdowns } from "../utils/funcs";

    import Navbar from "../components/Navbar.svelte";
import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener('click', (e) => {
            toggleDropdowns(e, 'select')
        })
    })
</script>

<Navbar />

<main class="[ main-container ] [ margin-block-2 margin-inline-auto ]" data-grid-collapse>
    <div></div>
    <slot></slot>
</main>