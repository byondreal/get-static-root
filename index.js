module.exports = function(scriptName) {
  var url = '';
  var scripts = document.querySelectorAll('script');
  var scriptUrl;
  for (var i = 0; i < scripts.length; i++) {
    scriptUrl = scripts[i].src;
    if (scriptUrl && scriptUrl.indexOf(scriptName) !== -1) {
      url = scriptUrl.replace(scriptName, '');
      break;
    }
  }
  return url;
};

