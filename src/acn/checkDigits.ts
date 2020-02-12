/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigits = (input: number[]): number => {
    const weight = [8, 7, 6, 5, 4, 3, 2, 1];
    const sum = input.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const remainder = 10 - sum % 10;
    return (remainder === 10) ? 0 : remainder;
};

export default checkDigits;
