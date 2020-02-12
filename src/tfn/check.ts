/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const value = input.replace(/\s/g, '');
    if (!/^\d{8,9}$/.test(value)) {
        return { valid: false };
    }

    const weight = [1, 4, 3, 7, 5, 8, 6, 9, 10];
    const sum = value.split('').map((c, i) => parseInt(c, 10) * weight[i]).reduce((a, b) => a + b, 0);

    return { valid: sum % 11 === 0 };
};

export default check;
