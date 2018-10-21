# JavaScript solution to Robot Walks

This a generic solution written in JavaScript to [Project Euler's problem 208](https://projecteuler.net/problem=208).

The problem statement has fixed the motion to (1/5)th of an arc = _72º_ and distance to _70_ units.\
Let's make this more generic to (1/**n**)th of an arc and distance = **m** units.

To find the solution, call

```js
var possiblePaths = getPath(n, m);

// for the mentioned problem
possiblePaths = getPath(5, 70);
```
