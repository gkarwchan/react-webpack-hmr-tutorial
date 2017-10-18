import _ from 'lodash';
import printMe from './print';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    btn.innerHTML = "click me";
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
  }
  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('print changessss');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }