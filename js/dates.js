//STEP 1
// let daysInMonth = function(month, year) {
//     return new Date(year, month, 0).getDate()
// };
// console.log(`There are ${daysInMonth(4, 2022)} in April 2022`);
// console.log(`There are ${daysInMonth(5, 2022)} in May 2022`);

//STEP 2
// let d = new Date();
// let m = d.getMonth() + 1 ;

// switch (m) {  
//     case 1: m = 'Jan'; break;
//     case 2: m = 'Feb'; break;
//     case 3: m = 'Mar'; break;
//     case 4: m = 'Apr'; break;
//     case 5: m = 'May'; break;
//     case 6: m = 'Jun'; break;
//     case 7: m = 'Jul'; break;
//     case 8: m = 'Aug'; break;
//     case 9: m = 'Sep'; break;
//     case 10: m = 'Oct'; break;
//     case 11: m = 'Nov'; break;
//     case 12: m = 'Dec'; break;
//     default: break;
// }
// console.log(m)

//STEP 3
// let d = new Date();
// let weekend = function(d) {
//    if(d.getDay() === 6 || d.getDay() === 0) {
//     return 'Today is weekend';
// } else {
//     return 'Today is not weekend';
// }
// }
// console.log(weekend(d));

//STEP 4
// let d = new Date();
// let yesterday = d.getDay();

// switch (yesterday) {  
//         case 1: yesterday = 'Sunday'; break;
//         case 2: yesterday = 'Monday'; break;
//         case 3: yesterday = 'Tuesday'; break;
//         case 4: yesterday = 'Wednesday'; break;
//         case 5: yesterday = 'Thursday'; break;
//         case 6: yesterday = 'Friday'; break;
//         case 7: yesterday = 'Saturday'; break;
    
//         default: break;
//     }
//     console.log(`Yesterday was ${yesterday}`)

//STEP 5
let d = new Date();
let today = d.getDay() + 1 ;
switch (today) {  
            case 1: today = 'Sunday'; break;
            case 2: today = 'Monday'; break;
            case 3: today = 'Tuesday'; break;
            case 4: today = 'Wednesday'; break;
            case 5: today = 'Thursday'; break;
            case 6: today = 'Friday'; break;
            case 7: today = 'Saturday'; break;
        
            default: break;
        }
console.log(today.charAt(0));

