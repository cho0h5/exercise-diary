<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

{#each data.records as record}
    {#each record.exercises as exercise}
        {exercise.order}
        {exercise.exercise}
        {exercise.sets}
        <br/>
    {/each}
    <br/>
    {record.date}
    <br/>
    <br/>
{/each}