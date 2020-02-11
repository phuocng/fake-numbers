/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigits = (input: number[]): number => {
    const weight = [3, 5, 7, 9, 11, 13, 15, 17, 19];
    const sum = input.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    return 11 + (sum - 1) % 89;
};

export default checkDigits;
