/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random NIF number
 *
 * @see https://fr.wikipedia.org/wiki/Numéro_d%27Immatriculation_Fiscale#France
 * @return string
 */
const fake = (): string => {
    const first = randomFromArray([0, 1, 2, 3]);
    const partial = randomNumbers(12);
    return [first].concat(partial).join('');
};

export default fake;
