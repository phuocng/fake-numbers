# Fake Numbers
Generate fake and valid numbers.

~~~ javascript
// Generate a fake credit card number
import fake from './src/creditCard/fake';

const creditCardNumber = fake();

// Check if a given value is a valid credit card nunber
import check from './src/creditCard/check';
check(creditCardNumber).valid;      // true
~~~

## Supported numbers

* [x] 01. BIC (Business Identifier Code)
* [x] 02. Credit card number
* [x] 03. EAN (International Article Number)
* [x] 04. IMEI (International Mobile Equipment Identity)
* [x] 05. IMO (International Maritime Organization)

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