//JS Array Methods
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
function insertGETParam(key, value) {
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
*/
function highlightURLs(source)
{
    return URI.withinString(source, function(url) {
        return "<a href='" + url + "' target='_blank'>" + url + "</a>";
    });
}

//JS Output
/*
    Console log every key and its value from a passed object.
*/
function consoleIterateObject(data){
  Object.keys(data).forEach(function(key){console.log(key+": ", data[key]);});
}

/*
  Console log any amount of passed arguments
*/
function out() {
    for (var i = 0; i < arguments.length; i++) {
        console.log("i: " + i + " A: " + arguments[i] + "\n");
    }
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
  Generates a random color and returns its hex and rgb value.
*/
function generateRandomColor() {
        var r, g, b;
        r = ~~(Math.random() * 255);
        g = ~~(Math.random() * 255);
        b = ~~(Math.random() * 255);

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        var hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        return {hex: hex, rgb: "rgb(" + [r, g, b].join(',') + ")"};
}

/*
  Invert a rgb color string.
  Extracts the values from a css sring: rgb(255,255,255) for example.
*/
function invertRGBColor(color) {
    color = color.substr(4, color.length - 5);
    var c = color.split(",");


    var r = 255 - c[0];
    var g = 255 - c[1];
    var b = 255 - c[2];

    return "rgb(" + [r, g, b].join(',') + ")";
}
