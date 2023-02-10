import { records } from '$lib/records';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const query = {};
    const options = {
        projection: {
            _id: 0,
        }
    };

    return {
        records: await records.find(query, options).toArray()
    };
}) satisfies PageServerLoad;