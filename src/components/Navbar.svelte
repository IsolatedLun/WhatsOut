<script>
    import Button from "./Interactibles/Button.svelte";
    import { ICON_DUMBBELL } from "../consts";
</script>

<nav class="[ primary-nav ] [ flex align-items-center 
    justify-content-space-between padding-block-1 padding-inline-3 ]">
    <h1 class="[ icon ] [ fs-600 rotate-angled-pos ]">
        { ICON_DUMBBELL }
    </h1>
    <ul class="[ flex gap-3 ]">
        <li>
            <a href="/">Workouts</a>
        </li>
        <li>
            <a href="/add">Add</a>
        </li>
    </ul>

    <Button>N</Button>
</nav>