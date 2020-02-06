/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { imei } from '../src';

describe('Generate IMEI number', () => {
    it('IMEI number', () => {
        const number = imei.fake();
        const result = imei.check(number);
        expect(result.valid).to.be.true;
    });
});
