/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigits = (input: number[]): number => {
    const weight = [4, 3, 7, 5, 8, 6, 9, 10];
    const sum = input.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const remainder = 11 - sum % 11;
    return (remainder < 10) ? remainder : 0;
};

export default checkDigits;
