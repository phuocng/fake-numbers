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
import { CompanyType } from './CompanyType';

/**
 * Generate a random Venezuelan VAT number
 *
 * @returns string
 */
const fake = (companyType?: CompanyType): string => {
    const type = companyType || randomFromArray(Object.values(CompanyType)) as CompanyType;

    const partial = randomNumbers(8);
    const cd = checkDigits(type, partial);

    return `${type}${partial.join('')}${cd}`;
};

export default fake;
