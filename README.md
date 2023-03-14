# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nelsonchengg/lotide`

**Require it:**

`const _ = require('@nelsonchengg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Checks if actual array equals expected array
* `assertEqual`: Checks if actual equals expected
* `assertObjectsEqual`: Prints a statement indicating if actual object equals expected object
* `countLetters`: Counts letters in a string and places them into an object to read
* `countOnly`: Counts indicated items and places them into an object to read
* `eqArrays`: Checks if actual array equals expected array
* `eqObjects`: Checks if actual object equals expected objects
* `findKey`: Finds the key with the associated value
* `findKeyByValue`: Find the key associated with the indicated value
* `head`: Returns the index value 0 from your array
* `letterPositions`: Returns the letters of a string into an object and indicates their position
* `map`: Performs a callback function on all items in an array
* `middle`: Returns the middle values of an array
* `tail`: Returns the array without index value 0
* `takeUntil`: Pushes values into an array until the callback function condition is met
* `without`: Creates a new array by removing the items from an indicated array