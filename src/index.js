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
