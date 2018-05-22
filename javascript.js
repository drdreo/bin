//JS Function decorators
/*
  Creates a version of the function that executes only once.
  It’s useful when we want to make sure it runs only once, no matter how many times it is called from different places.
  
  let processonce = once(process);
*/
function once(fn){
  let returnValue;
  let canRun = true;
  return function runOnce(){
      if(canRun) {
          returnValue = fn.apply(this, arguments);
          canRun = false;
      }
      return returnValue;
  }
}

/*
  Creates a version of the function that, when invoked repeatedly, will call the original function once per every wait milliseconds.
  It’s useful for limiting events that occur faster.
  
  let throttledProcess = throttle(process, 666);
*/
function throttle(fn, interval) {
    let lastTime;
    return function throttled() {
        let timeSinceLastExecution = Date.now() - lastTime;
        if(!lastTime || (timeSinceLastExecution >= interval)) {
            fn.apply(this, arguments);
            lastTime = Date.now();
        }
    };
}

/*
  Creates a version of the function that, when invoked repeatedly, will call the original function after wait milliseconds since the last invocation. 
  It’s useful for running a function only after the event has stopped arriving.
  
  let delayProcess = debounce(process, 666);
*/
function debounce(fn, interval) {
    let timer;
    return function debounced() {
        clearTimeout(timer);
        let args = arguments;
        let that = this;
        timer = setTimeout(function callOriginalFn() {
             fn.apply(that, args);
        }, interval);
    };
}

//JS Array Methods

/*
  Returns a new array which contatins every item from a specific key.
  The key must be iteratable.
  Usage:
  
  let array = [{name:"one", entries:[1,2,3]},{name:"two", entries: [4]}]
  console.log(flattenArrayByKey(array, "entries")); // [1,2,3,4]
*/
function flattenArrayByKey(array, key){
   return array.reduce((A,{entries})=>([...A,...entries]), [])
}

/*
  Remove duplicate entries inside an array. Limited to 2 dimensions.
*/
function removeDuplicateItems(arr) => {
  [...new Set(arr)];
}

/*
  Returns a random item of an array.
*/
function randomArrayItem(items){
  return items[Math.floor(Math.random() * items.length)];
}

//JS URL methods
/*
  Inserts a GET parameter into the URL.
  Pass a key and its value.
*/
function addGETParam(key, value) {
    key = encodeURI(key);
    value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i = kvp.length;
    var x;
    while (i--) {
        x = kvp[i].split('=');

        if (x[0] == key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if (i < 0) {
        kvp[kvp.length] = [key, value].join('=');
    }

    var currUrl = getPathFromUrl(document.URL);
    history.pushState('data to be passed', 'Page', currUrl + '?' + kvp.join('&'));

}

function findGETParameter(parameterName) {
    let result = null, tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

/*
  Removes a GET parameter from the current URL.
  Pass a key.
*/
function removeGETParam(key) {
    var url = document.location.href;
    var params = url.split('?');
    if (params.length == 1) return;

    url = params[0] + '?';
    params = params[1];
    params = params.split('&');

    $.each(params, function (index, value) {
        var v = value.split('=');
        if (v[0] != key) url += value + '&';
    });

    url = url.replace(/&$/, '');
    url = url.replace(/\?$/, '');

    history.pushState('data to be passed', 'Page', url);
}

/*
  Create a-tags from a passed URI
  depends on URI library: https://medialize.github.io/URI.js/docs.html
*/
function highlightURLs(source)
{
    return URI.withinString(source, function(url) {
        return "<a href='" + url + "' target='_blank'>" + url + "</a>";
    });
}

//JS Random
/*
  Generate random number in range
*/
function randomNumberBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//JS Colors

/*
  Generates a random color and returns its hex and rgb value as object.
  
  let color = generateRandomColor() // {hex: "#c1382f", rgb: "rgb(193,56,47)"}
*/
function generateRandomColor() {
        let r, g, b;
        r = ~~(Math.random() * 255);
        g = ~~(Math.random() * 255);
        b = ~~(Math.random() * 255);

        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        return {hex: hex, rgb: "rgb(" + [r, g, b].join(',') + ")"};
}

/*
  Invert a rgb color string.
  Extracts the values from a CSS RGB sring: rgb(255,255,255) and inverts it.
  
  let invertedRGBString = invertRGBColor("rgb(0,255,255)") // "rgb(255,0,0)"
*/
function invertRGBColor(color) {
    color = color.substr(4, color.length - 5);
    let c = color.split(",");
    let r = 255 - c[0];
    let g = 255 - c[1];
    let b = 255 - c[2];
  
    return "rgb(" + [r, g, b].join(',') + ")";
}
