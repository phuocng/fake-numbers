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

    if (!/^\d{11}$/i.test(formatted)) {
        return { valid: false };
    }

    const digits = formatted.split('').map((c) => parseInt(c, 10));

    const calculateCheckDigit = (sum: number) => {
        const remainder = sum % 11;
        return (remainder < 2) ? 0 : 11 - remainder;
    };

    // Determine the first check digit
    const firstCheckDigit = calculateCheckDigit(
        digits.slice(0, 9).map((v, i) => v * (10 - i)).reduce((a, b) => a + b, 0)
    );
    if (firstCheckDigit !== digits[9]) {
        return { valid: false };
    }

    // Determine the second check digit
    const secondCheckDigit = calculateCheckDigit(
        digits.slice(0, 10).map((v, i) => v * (11 - i)).reduce((a, b) => a + b, 0)
    );

    return { valid: secondCheckDigit === digits[10] };
};

export default check;
