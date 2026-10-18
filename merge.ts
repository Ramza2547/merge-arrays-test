export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = collection_2.length - 1; // collection_2 เรียงจาก max -> min จึงอ่านย้อนหลังจากตัวท้าย
    let k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j >= 0 ? collection_2[j] : Infinity;
        const val3 = k < collection_3.length ? collection_3[k] : Infinity;

        const minVal = Math.min(val1, val2, val3);

        if (minVal === val1) {
            result.push(collection_1[i++]);
        } else if (minVal === val2) {
            result.push(collection_2[j--]);
        } else {
            result.push(collection_3[k++]);
        }
    }

    return result;
}