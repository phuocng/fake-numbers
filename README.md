# Fake Numbers
Generate a fake and valid numbers.

~~~ javascript
// Generate a fake credit card number
import { fakeCreditCard } from './src/fake/fakeCreditCard.ts';

const creditCardNumber = fakeCreditCard();

// Check if a given value is a valid credit card nunber
import { checkCreditCard } from './src/check/checkCreditCard.ts';
checkCreditCard(creditCardNumber);
~~~

## Supported numbers

* [x] 1. Credit card number
* [x] 2. EAN

## Command

1. Running tests

```
$ npm run test
```

## About

This project is developed by [Nguyen Huu Phuoc](https://twitter.com/nghuuphuoc).
You might be interesting in my projects:

| Product                                           | Description                                                       |
|---------------------------------------------------|-------------------------------------------------------------------|
| [BlurPage](https://blur.page)                     | A browser extension to hide sensitive information on a web page   |
| [CSS Layout](https://csslayout.io)                | A collection of popular layouts and patterns made with CSS        |
| [FormValidation](https://formvalidation.io)       | The best validation library for JavaScript                        |
| [React PDF Viewer](https://react-pdf-viewer.dev)  | A React component to view a PDF document                          |