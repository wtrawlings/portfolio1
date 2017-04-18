// $(document).ready(function() {
//     $('#homeHeading')
//         .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
//         .delay(300)           // Wait for a bit so the user notices it fade in
//         .css({"opacity":1});  // Fade it back in. Swap css for animate in legacy browsers if required.
// });

$(document).ready(function () {
    $('#homeHeading').fadeIn(4000).removeClass('hidden');
});
