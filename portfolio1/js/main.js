// $(document).ready(function() {
//     $('#homeHeading')
//         .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
//         .delay(300)           // Wait for a bit so the user notices it fade in
//         .css({"opacity":1});  // Fade it back in. Swap css for animate in legacy browsers if required.
// });

$(document).ready(function () {
    $('#rabbit').fadeIn(1000).removeClass('hidden');
    $('#homeHeading').fadeIn(8000).removeClass('hidden');
});

//declare var section//
// var gstd = {
//   "gstd_status": true,
//   "company_name": "CompanyName",
//   "situsedState": "AL",
//   "minBenefitHours": 35,
//   "coverageActiveAfterDays":14,
//   "featureSet": [
//
//   ]
//id="gstd1"
// }


//
// var values = {};
// $.each($('#gstd1').serializeArray(), function(i, field) {
//     values[field.name] = field.value;
// });
// console.log(values)


// window.params = function(){
//     var params = {};
//     var param_array = window.location.href.split('?')[1].split('&');
//     for(var i in param_array){
//         x = param_array[i].split('=');
//         params[x[0]] = x[1];
//     }
//     return params;
// }();
// if(window.params.state == 'CO') {
//   console.log("Alabama");
// }
// function get(name){
//   var url = window.location.search;
//   var num = url.search(name);
//   var namel = name.length;
//   var frontlength = namel+num+1; //length of everything before the value
//   var front = url.substring(0, frontlength);
//   url = url.replace(front, "");
//   num = url.search("&");
//
//  if(num>=0) return url.substr(0,num);
//  if(num<0)  return url;
// }
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        params = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!params.hasOwnProperty(n)) params[n] = [];
        params[n].push(nv.length === 2 ? v : null);
    }
    return params;
}

var urlString = window.location.search;
    urlParams = parseURLParams(urlString);

// console.log(urlParams)
console.log(JSON.stringify(urlParams));
//var myUTM = JSON.parse(urlParams);



//look at this notation//
// var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
// var myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name;

document.getElementById('CompanyName1').innerHTML = urlParams.CompanyName[0];
