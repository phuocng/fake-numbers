/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const checkDigits = (input: number[]): number => {
    const sum = input.map((v, i) => v * (1 + i % 9)).reduce((a, b) => a + b, 0);
    let remainder = sum % 11;
    if (remainder === 10) {
        remainder = input.map((v, i) => v * (1 + (i + 2) % 9)).reduce((a, b) => a + b, 0);
    }
    return remainder % 11 % 10;
};

export default checkDigits;
