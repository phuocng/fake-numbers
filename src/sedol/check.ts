/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const v = input.toUpperCase();
    if (!/^[0-9A-Z]{7}$/.test(v)) {
        return { valid: false };
    }

    const chars = v.split('');
    const lastChar = chars.pop();

    const weight = [1, 3, 1, 7, 3, 9, 1];
    const sum = chars.map((c, i) => weight[i] * parseInt(c, 36)).reduce((a, b) => a + b, 0);

    const checkDigit = (10 - sum % 10) % 10;
    return { valid: `${checkDigit}` === lastChar };
};

export default check;
