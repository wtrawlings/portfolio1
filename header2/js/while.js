// consol.log("I am called the Count... because I really love to count!")
//
// while (n<10) {
//   console.log()n, "ha-ha-ha")
//   n++
// }
//
// consol.log('fin!')

//-----------------------THIS IS A NUMBER COUNTER--------------------
// var n=1
// while (n<=10) {
//   console.log(n);
//   n++;
// }

//=---------------------Count even numbers up to 20---------------------
// var n=2;
// while (n<=20) {
//   console.log(n);
//   n=n+2;
// }


//--------------------------this is a count from 1 to a variable number-------------
// var i=1;
// var n=100;
// while(i<=n) {
//   console.log(i);
//   i++;
// }
//--------------------------------this one didn't work so I will copy and paste an answer
// var n=1;
// var outputTarget = document.querySelector("#exercise-1");
// var outputHtml = "<ul>";
// while (n <= 10) {
//   console.log(n);
//   outputHtml += "<li>" + n + "</li>";
//   n++;
// }
//
// outputHtml += "</ul>";
//
// outputTarget.innerHtml = outputHtml;

//-------------------This is his and it works but I don't see the difference between his and mine---------------
// var n = 1;
// var outputTarget = document.querySelector("#exercise-1");
// var outputHtml = "<ul>";
//
// while (n <= 10) {
//     console.log(n);
//     outputHtml += "<li>" + n + "</li>";
//     n++;
// }
//
// outputHtml += "</ul>";
//
// outputTarget.innerHTML = outputHtml;


//-------------------this is exercise-5 or the second div
// var w = 15;
// var outputTarget1 = document.querySelector("#exercise-2");
// var outputHtml1 = "<ul>";
// while (w >= 0) {
//
//   console.log(w);
//     if (w % 2 === 0) {
//       outputHtml1 += "<li>" + w + " = even</li>";
//     }
//     else {outputHtml1 += "<li>" + w + " = odd</li>";
//     }
//   w--;
//   }
// outputHtml1 += "</ul>";
// outputTarget1.innerHTML = outputHtml1;





//-----------------------exercise-6 is the FIZZBUZZ exercise
//----------Error on the Brackets but I don't know Why
//---I didn't have "else if" versus the else and the assignment operator can't conflict
// var n = 1;
// var outputTarget = document.querySelector("#exercise-3");
// var outputHtml = "<ul>";
// while (n <= 100) {
//   console.log(n);
//   if (n % 3 == 0 && n % 5 == 0) {
//     outputHtml += "<li>" + n + " = FizzBuzz</li>";
//   } else if (n % 5 == 0 && n % 3 != 0) {
//     outputHtml += "<li>" + n + " = Buzz</li>";
//   } else if (n % 3 == 0 && n % 5 != 0) {
//     outputHtml += "<li>" + n + " = Fizz</li>";
//   } else {
//     outputHtml += "<li>" + n + " </li>";
//   }
//   n++;
// }
//
// outputHtml += "</ul>";
// outputTarget.innerHTML = outputHtml;



//-------this is their way of doing FIZZBUZZ
// var n = 1;
// var outputTarget = document.querySelector("#exercise-3");
// var outputHtml = "<ul>";
// while (n <= 100) {
//     if(n % 3 === 0 && n % 5 == 0){
//         outputHtml += "<li>" + n + " FizzBuzz</li>";
//     } else if (n % 3 === 0) {
//         outputHtml += "<li>" + n + " Fizz</li>";
//     } else if (n % 5 === 0) {
//         outputHtml += "<li>" + n + " Buzz</li>";
//     } else {
//         console.log(n);
//         outputHtml += "<li>" + n + "</li>";
//     }
//     n++;
// }
// ouputHtml = "</ul>";
// outputTarget.innerHTML = outputHtml;
