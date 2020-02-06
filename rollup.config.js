/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const input = './src/index.ts';

export default [
    // UMD
    {
        input,
        output: {
            file: './dist/umd/fake-numbers.js',
            format: 'umd',
            name: 'FakeNumbers',
        },
        plugins: [
            typescript({
                removeComments: true,
                module: 'es6',
                target: 'es5',
                jsx: 'react',
                allowSyntheticDefaultImports: true,
                resolveJsonModule: true,
                moduleResolution: 'node',
            }),
        ],
    },

    // Minified UMD
    {
        input,
        output: {
            file: './dist/umd/fake-numbers.min.js',
            format: 'umd',
            name: 'FakeNumbers',
        },
        plugins: [
            typescript({
                removeComments: true,
                module: 'es6',
                target: 'es5',
                jsx: 'react',
                allowSyntheticDefaultImports: true,
                resolveJsonModule: true,
                moduleResolution: 'node',
            }),
            terser(),
        ],
    },

    // CJS
    {
        input,
        output: {
            file: './dist/cjs/fake-numbers.js',
            format: 'cjs',
        },
        plugins: [
            typescript({
                removeComments: true,
                module: 'es6',
                target: 'es5',
                jsx: 'react',
                allowSyntheticDefaultImports: true,
                resolveJsonModule: true,
                moduleResolution: 'node',
            }),
        ],
    },

    // Minified CJS
    {
        input,
        output: {
            file: './dist/cjs/fake-numbers.min.js',
            format: 'cjs',
        },
        plugins: [
            typescript({
                removeComments: true,
                module: 'es6',
                target: 'es5',
                jsx: 'react',
                allowSyntheticDefaultImports: true,
                resolveJsonModule: true,
                moduleResolution: 'node',
            }),
            terser(),
        ],
    },
];
