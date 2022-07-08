<script lang='ts'>
    import { workoutData } from "../localStore/workoutStore";

    const { user } = $workoutData;
</script>

<div class="[ user ] [ padding-inline-4 padding-block-2 margin-inline-auto text-center 
    border-radius-cubed height-max-content ]">
    <div class="[ user__img-container ] [ border-radius-round margin-block-end-1 ]">
        <img class="[ user__profile ]" src="" alt='' />
    </div>
    <p>{ user.username }</p>
</div>