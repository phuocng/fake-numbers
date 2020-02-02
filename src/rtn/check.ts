/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    if (!/^\d{9}$/.test(input)) {
        return { valid: false };
    }

    let sum = 0;
    for (let i = 0; i < input.length; i += 3) {
        sum += parseInt(input.charAt(i),     10) * 3
            +  parseInt(input.charAt(i + 1), 10) * 7
            +  parseInt(input.charAt(i + 2), 10);
    }

    return { valid: (sum !== 0 && sum % 10 === 0) };
};

export default check;
