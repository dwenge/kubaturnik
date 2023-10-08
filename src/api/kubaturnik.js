import {openDB} from 'idb'

const dbPromise = openDB('kubaturnik', 1, {
    upgrade(database) {
        if (!database.objectStoreNames.contains('calc')) {
            database.createObjectStore('calc', {keyPath: 'id', autoIncrement: true});
        }
    }
})

const load = async () => await (await dbPromise).getAll('calc') || [];
const add = async (d, v, q) => (await dbPromise).add('calc', {d, v, q});
const update = async (item) => (await dbPromise).put('calc', item);
const remove = async (id) => (await dbPromise).delete('calc', id);
const clear = async () => (await dbPromise).clear('calc');

const getTable = () => ([
    [3, 0.012], [4, 0.016], [5, 0.023], [6, 0.028], [7, 0.036], [8, 0.045], [9, 0.055],
    [10, 0.065], [11, 0.08], [12, 0.093], [13, 0.108], [14, 0.123], [15, 0.14], [16, 0.155], [17, 0.175], [18, 0.194], [19, 0.21],
    [20, 0.23], [21, 0.26], [22, 0.28], [23, 0.31], [24, 0.33], [25, 0.36], [26, 0.39], [27, 0.42], [28, 0.45], [29, 0.48],
    [30, 0.52], [31, 0.55], [32, 0.59], [33, 0.62], [34, 0.66], [35, 0.7], [36, 0.74], [37, 0.78], [38, 0.82], [39, 0.86],
    [40, 0.9], [41, 0.95], [42, 1], [43, 1.04], [44, 1.09], [45, 1.14], [46, 1.19], [47, 1.24], [48, 1.3], [49, 1.35],
    [50, 1.41], [51, 1.47], [52, 1.53], [53, 1.59], [54, 1.65], [55, 1.72], [56, 1.78], [57, 1.84], [58, 1.91], [59, 1.98],
    [60, 2.05], [61, 2.11], [62, 2.18], [63, 2.25], [64, 2.32], [65, 2.38], [66, 2.44], [67, 2.51], [68, 2.57]
]);

export default {
    load,
    add,
    update,
    remove,
    clear,
    getTable
}
