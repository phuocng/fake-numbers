/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const formatted = input.replace(/[\.\/-]/g, '');

    if (!/^\d{14}$/i.test(formatted)) {
        return { valid: false };
    }

    const calculateCheckDigit = (arr: number[], weight: number[]) => {
        const sum = arr.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);
        const reminder = sum % 11;
        return (reminder < 2) ? 0 : 11 - reminder;
    };

    const digits = formatted.split('').map((c) => parseInt(c, 10));

    // Determine the first check digit
    const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const firstCheckDigit = calculateCheckDigit(digits.slice(0, 12), w1);
    if (firstCheckDigit !== digits[12]) {
        return { valid: false };
    }

    // Determine the second check digit
    const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondCheckDigit = calculateCheckDigit(digits.slice(0, 13), w2);

    return { valid: secondCheckDigit === digits[13] };
};

export default check;
