'use strict';

const expect = require('chai').expect;

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
const stub = () => {

};


/*
  your notes go here
*/

for (const solution of [
  secretSolution,
  // stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter', () => {
      expect(solution()).to.deep.equal([0]);
    });
    it('0', () => {
      expect(solution(0)).to.deep.equal([0]);
    });
    it('1', () => {
      expect(solution(1)).to.deep.equal([0, 1]);
    });
    // write at least 5 more tests ...

  });
};


// minified solution for testing your tests
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
