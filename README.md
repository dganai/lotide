# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dganai/lotide`

**Require it:**

`const _ = require('@dganai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of an array
* `tail(arr)`: returns tail of an array (not including first element)
* `middle(array)`: returns middle most elements of given array 
* `assertEqual(actual, expected)`: prints "✅✅✅ Assertion Passed" or "🛑🛑🛑 Assertion Failed" when comparing two values to see if they match or not
* `assertArraysEqual(array1, array2)`: prints "✅✅✅ Assertion Passed" or "🛑🛑🛑 Assertion Failed" when comparing to see if two arrays are equal
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match
* `without(source, itemsToRemove)`: returns a subset of the given array, removing unwanted elements
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items
* `countLetters(string)`: takes in a sentence as a string then returns a count of each of the letters in that sentence
* `letterPositions(sentence)`: returns all the indices in the string where each character is found
* `findKeyByValue(object, value)`: scans the object and returns the first key that contains a given value; undefined if no value
* `eqObjects(object1, object2)`: returns true or false based on if two object are a match perfect match or not
* `assertObjectsEqual(actual, expected)`: prints "✅✅✅ Assertion Passed" or "🛑🛑🛑 Assertion Failed" when comparing two objects to see if they match or not
* `map(array, callback)`: returns new array based on results of the callback function
* `takeUntil(array, callback)`: returns slice of the array with elements taken from the beginning, until the callback returns a truthy value
* `findKey(object, callback)`: scans object and returns the first key for which the callback returns a truthy value; if no key, returns undefined


