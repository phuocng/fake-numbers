/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

import checkDigits from './checkDigits';

/**
 * Generate a random TFN (Australian Tax File Number)
 *
 * @see https://en.wikipedia.org/wiki/Tax_file_number
 * @see https://www.ato.gov.au/Individuals/Tax-file-number/
 * @return string
 */
const fake = (): string => {
    const length = randomFromArray([7, 8]);
    const partial = randomNumbers(length);

    const first = checkDigits(partial);
    const output = `${first}${partial.join('')}`;

    return `${output.substr(0, 3)} ${output.substr(3, 3)} ${output.substr(6)}`;
};

export default fake;
