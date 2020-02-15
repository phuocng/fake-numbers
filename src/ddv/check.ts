/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    let value = input.replace(/\s/g, '');
    if (value.substr(0, 2) === 'SI') {
        value = value.substr(2);
    }

    // Can't start with zero
    if (!/^[1-9]\d{7}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const lastDigit = digits.pop();

    const weight = [8, 7, 6, 5, 4, 3, 2];
    const sum = digits.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    let remainder = 11 - sum % 11;
    if (remainder === 10) {
        remainder = 0;
    }

    return { valid: remainder === lastDigit };
}

export default check;
