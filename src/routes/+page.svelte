<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

{#each data.records as record}
    <table>
        <thead>
            <tr>
                <th colspan="20">{record.date}</th>
            </tr>
        </thead>
        <tbody>
            {#each record.exercises as exercise}
                <tr>
                    <td>
                        {exercise.order}
                    </td>
                    <td>
                        {exercise.exercise}
                    </td>
                    {#each exercise.sets as set}
                        <td>
                            {set}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/each}