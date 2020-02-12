/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

interface CheckDigit {
    checkDigit: number;
    sequence: number;
}

const checkDigit = (sequence: number, suffix: string): CheckDigit => {
    let s = sequence;
    const weight = [3, 7, 9, 5, 8, 4, 2, 1, 6];
    const calculateCheckDigit = (withSequence: string) => {
        return withSequence.split('').map((c, i) => parseInt(c, 10) * weight[i]).reduce((a, b) => a + b, 0) % 11;
    };

    let cd = calculateCheckDigit(`${s}${suffix}`);
    while (cd === 10) {
        s += 1;
        cd = calculateCheckDigit(`${s}${suffix}`);
    }

    return {
        checkDigit: cd,
        sequence: s,
    };
};

export default checkDigit;
