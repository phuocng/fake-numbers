/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/fake-numbers.min.js');
} else {
    module.exports = require('./cjs/fake-numbers.js');
}
