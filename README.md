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

* [x] 01. BIC (_Business Identifier Code_)
* [x] 02. Credit card number
* [x] 03. EAN (_International Article Number_)
* [x] 04. IMEI (_International Mobile Equipment Identity_)
* [x] 05. IMO (_International Maritime Organization_)
* [x] 06. ISBN (_International Standard Book Number_)
* [x] 07. ISIN (_International Securities Identification Number_)
* [x] 08. ISMN (_International Standard Music Number_)
* [x] 09. ISSN (_International Standard Serial Number_)
* [x] 10. SEDOL (_Stock Exchange Daily Official List_)
* [x] 11. VIN (_Vehicle Identification Number_): Support US only

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
| [Blur Page](https://blur.page)                    | A browser extension to hide sensitive information on a web page   |
| [CSS Layout](https://csslayout.io)                | A collection of popular layouts and patterns made with CSS        |
| [Fake Numbers](https://fakenumbers.io)            | Generate fake and valid numbers                                   |
| [FormValidation](https://formvalidation.io)       | The best validation library for JavaScript                        |
| [React PDF Viewer](https://react-pdf-viewer.dev)  | A React component to view a PDF document                          |
