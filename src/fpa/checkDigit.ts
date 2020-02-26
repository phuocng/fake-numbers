/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigit = (input: number[]): number => {
    const weight = [256, 128, 64, 32, 16, 8, 4, 2];
    const sum = input.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    return (sum % 11) % 10;
};

export default checkDigit;
