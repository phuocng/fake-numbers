/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input)) {
        return { valid: false };
    }

    const length = input.length;
    const weight = (length === 8) ? [3, 1] : [1, 3];
    const sum = Array(length - 1)
        .fill(0)
        .map((_, i) => parseInt(input.charAt(i), 10) * weight[i % 2])
        .reduce((a, b) => a + b, 0);

    const checkDigit = (10 - sum % 10) % 10;
    return {
        valid: `${checkDigit}` === input.charAt(length - 1),
    };
};

export default check;
