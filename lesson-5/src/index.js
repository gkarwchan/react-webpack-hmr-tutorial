var _ = require('lodash');
var printMe = require('./print');
require('./style.css');

function component() {
    var thedev = document.createElement('div');
    var btn = document.createElement('button');
    thedev.innerHTML = _.join(['Hello', 'webpack'], ' ');
    thedev.classList.add('hello');
    btn.innerHTML = "click me";
    btn.onclick = () => console.log(printMe());
    thedev.appendChild(btn);
    return thedev;
  }
  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      printMe = require('./print');
      
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    });
  }