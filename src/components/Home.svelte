<script>
    import Select from "./Interactibles/Select.svelte";
    import TextInput from "./Interactibles/TextInput.svelte";

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
</div>