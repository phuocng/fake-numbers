/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

// Test the type definitions
import { isbn, IsbnType } from './index.d';

const number = isbn.fake(IsbnType.Isbn10);

const result = isbn.check(number);
const isValid = result.valid;
const cardType = result.meta?.type;
