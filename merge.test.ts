import { merge } from './merge';

describe('merge function', () => {
    it('should merge and sort three arrays correctly', () => {
        const col1 = [1, 3, 5]; // min to max
        const col2 = [6, 4, 2]; // max to min
        const col3 = [0, 7, 8]; // min to max

        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        expect(merge(col1, col2, col3)).toEqual(expected);
    });

    it('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
    });
});