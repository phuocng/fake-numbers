/**
 * Generate a fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export enum DoublePosition {
    Even,
    Old,
}

const luhn = (input: number[], doublePosition: DoublePosition): number => {
    const total = input.length;

    const transformed = Array(total).fill(0).map((_, index) => {
        if (doublePosition === DoublePosition.Even && index % 2 === 0 ||
            doublePosition === DoublePosition.Old && index % 2 === 1) {
            const double = input[index] * 2;
            return (double > 9) ? double - 9 : double;
        } else {
            return input[index];
        }
    });

    const sum = transformed.reduce((a, b) => a + b, 0);
    return (10 - (sum % 10)) % 10;
};

export default luhn;
