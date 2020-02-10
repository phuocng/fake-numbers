/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const v = input.replace(/\s/g, '');
    if (!/^\d{10}$/.test(v) || v.substr(0, 1) === '0') {
        return { valid: false };
    }

    const weight = [3, 7, 9, 5, 8, 4, 2, 1, 6];
    const getCheckDigit = (str: string) => {
        return str.split('').map((c, i) => parseInt(c, 10) * weight[i]).reduce((a, b) => a + b, 0) % 11;
    };

    let sequence = parseInt(v.substring(0, 3), 10);
    const cd = parseInt(v.substring(3, 4), 10);
    const dob = v.substring(4);

    let checkDigit = getCheckDigit(`${sequence}${dob}`);
    while (checkDigit === 10) {
        sequence += 1;
        checkDigit = getCheckDigit(`${sequence}${dob}`);
    }

    return { valid: checkDigit === cd };
};

export default check;
