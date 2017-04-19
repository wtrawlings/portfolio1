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
//
// }
