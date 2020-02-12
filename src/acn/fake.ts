/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';
import checkDigits from './checkDigits';

/**
 * Generate a random Australian Company Number
 *
 * @see https://en.wikipedia.org/wiki/Australian_Company_Number
 * @see https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/australian-company-number-digit-check/
 * @returns string
 */
const fake = (): string => {
    const partial = randomNumbers(8);
    const remainder = checkDigits(partial);

    const output = `${partial.join('')}${remainder}`;
    return `${output.substr(0, 3)} ${output.substr(3, 3)} ${output.substr(6)}`;
};

export default fake;
