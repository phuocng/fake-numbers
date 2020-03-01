/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const v = input.substr(0, 2) === 'BE' ? input.substr(2) : input;
    if (!/^\d{9,11}$/.test(v)) {
        return { valid: false };
    }

    // The old schema has only 9 digits, and we have to prefix with zero
    const prefix = (v.length === 9) ? `0${v}` : v;
    const sum = parseInt(prefix.substr(0, 8), 10) + parseInt(prefix.substr(8, 2), 10);

    return { valid: sum % 97 === 0 };
};

export default check;
