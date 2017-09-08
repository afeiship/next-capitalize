(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.capitalize = function (inStr) {
    return inStr.charAt(0).toUpperCase() + inStr.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.capitalize;
  }

}());
