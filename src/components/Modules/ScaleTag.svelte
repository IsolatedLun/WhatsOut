<script lang='ts'>
import type { Props_ScaleTag } from "./types";


    export let props: Props_ScaleTag = {
        variant: 'default'
    }
</script>

<div class="[ scale-tag ] [ flex align-items-center gap-1 fs-300 border-radius-100vw text-center ]" 
    data-variant={props.variant}>
    <div class="[ tag__dot ] [ border-radius-100vw ]"></div>
    <slot></slot>
</div>