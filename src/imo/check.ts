/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    if (!/^IMO \d{7}$/i.test(input)) {
        return { valid: false };
    }

    // Grab just the digits
    const digits = input.replace(/^.*(\d{7})$/, '$1');
    const sum = Array(digits.length - 1)
        .fill(0)
        .map((_, index) => parseInt(digits[index], 10) * (7 - index))
        .reduce((a, b) => a + b, 0);
    const checkDigit = sum % 10;

    return { valid: (checkDigit === parseInt(digits.charAt(6), 10)) };
};

export default check;
