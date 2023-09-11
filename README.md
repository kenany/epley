# epley

[Epley Formula][1] for one-repetition maximum.

## Example

``` javascript
const epley = require('epley');

epley(100, 6);
// => 120
```

## Installation

``` bash
$ npm install epley
```

## API

``` javascript
const epley = require('epley');
```

### `epley(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns Epley's one-repetition
maximum as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Epley_Formula
