/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    const citizenCheck = 'JZIHGFEDCBA'.split('');
    const foreignerCheck = 'XWUTRQPNMLK'.split('');

    if (!/^[STFG]\d{7}[A-Z]$/.test(input)) {
        return { valid: false };
    }

    const first = input.substr(0, 1);
    const digits = input.substr(1, 7);
    const lastChar = input.substr(-1);

    const weight = [2, 7, 6, 5, 4, 3, 2];
    const sum = digits.split('').map((c, i) => parseInt(c, 10) * weight[i]).reduce((a, b) => a + b, 0);

    const finalSum = (first === 'T' || first === 'G') ? sum + 4 : sum;
    const reminder = finalSum % 11;

    const checkChar = (first === 'S' || first === 'T') ? citizenCheck[reminder] : foreignerCheck[reminder];

    return { valid: checkChar === lastChar };
};

export default check;
