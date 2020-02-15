/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigits = (input: number[]): number => {
    const sum = input
        .map((v, i) => {
            const p = (v + 9 - i) % 10;
            return (p === 9) ? p : p * Math.pow(2, 9 - i) % 9;
        })
        .reduce((a, b) => a + b, 10);
    return (10 - sum % 10) % 10;
};

export default checkDigits;
