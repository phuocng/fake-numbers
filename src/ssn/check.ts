/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    return {
        valid: /^(00[1-9]|0[1-9]\d|[1-57-8]\d{2}|66[0-57-9]|6[0-57-9]\d)-(0[1-9]|[1-9]\d)-([1-9]\d{3}|0[1-9]\d{2}|00[1-9]\d|000[1-9])$/.test(input),
    };
};

export default check;
