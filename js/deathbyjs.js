//STEP 1
// let name = "paulina";
// let sortName = function(name) {
//     return name.split('').sort().join('')}

// console.log(sortName(name));

//STEP 2
// let text = "the quick brown fox";
// let arr = text.split(' ');

// function upper(arr) {
   
//   return arr.map(element => {
//       return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
//   }) }
    
// console.log(upper(arr).join(' '));


//STEP 3

// let string = 'The quick brown fox';

// function getVowels(str) {
//     var vowelsCount = 0;
  
//     for (var i = 0; i <= string.length - 1; i++) {
  
//       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }

//   console.log(getVowels());

//STEP 4

// const allCharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function stringID(length) {
//     let result = ' ';
//     const charactersLength = allCharacters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }

// console.log(stringID(8));

//STEP 5

function Longest_Country_Name(countries) {
    let longestCountry = countries[0];
    for (let country of countries) {
        if (country.length > longestCountry.length) {
            longestCountry = country;
        }
    }
    return longestCountry;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

