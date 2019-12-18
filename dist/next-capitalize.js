/*!
 * name: @feizheng/next-capitalize
 * description: Capitalize for next.
 * url: https://github.com/afeiship/next-capitalize
 * version: 1.0.0
 * date: 2019-12-18 20:04:25
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.capitalize = function(inString) {
    return inString.charAt(0).toUpperCase() + inString.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.capitalize;
  }
})();

//# sourceMappingURL=next-capitalize.js.map
