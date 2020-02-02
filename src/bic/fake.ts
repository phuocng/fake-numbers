/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Letters, Words } from '../CharSet';
import randomFromArray from '../utils/randomFromArray';
import randomString from '../utils/randomString';

const fake = (): string => {
    const branchCode = randomString(randomFromArray([0, 3]), Words);
    return `${randomString(6, Letters)}${randomString(2, Words)}${branchCode}`;
};

export default fake;
