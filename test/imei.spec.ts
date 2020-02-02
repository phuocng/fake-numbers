/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import check from '../src/imei/check';
import fake from '../src/imei/fake';

describe('Generate IMEI number', () => {
    it('IMEI number', () => {
        const result = fake();
        expect(check(result).valid).to.be.true;
    });
});
