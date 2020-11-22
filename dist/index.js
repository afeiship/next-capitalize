/*!
 * name: @jswork/next-capitalize
 * description: Capitalize for next.
 * homepage: https://github.com/afeiship/next-capitalize
 * version: 1.0.0
 * date: 2020-11-22 17:48:49
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.capitalize = function (inString) {
    return inString.charAt(0).toUpperCase() + inString.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.capitalize;
  }
})();
