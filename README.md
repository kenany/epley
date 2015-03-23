# epley

[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

[Epley Formula][1] for one-repetition maximum.

## Example

``` javascript
var epley = require('epley');

epley(100, 6);
// => 120
```

## Installation

``` bash
$ npm install epley
```

## API

``` javascript
var epley = require('epley');
```

### `epley(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns Epley's one-repetition
maximum as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Epley_Formula
   [travis]: https://travis-ci.org/KenanY/epley
   [travis-svg]: https://img.shields.io/travis/KenanY/epley.svg
   [gemnasium]: https://gemnasium.com/KenanY/epley
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/epley.svg
