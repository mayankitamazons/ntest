// // Q1- Write a function to create a 2-D List/Array with random integers between 0 to 100. This function should take two arguments - numberOfRows and numberOfColumns and return a 2Dlist. 
// function generateRandom2DList(numberOfRows, numberOfColumns) {
//   const result = [];

//   for (let i = 0; i < numberOfRows; i++) {
//     const row = [];
//     for (let j = 0; j < numberOfColumns; j++) {
//       // Generate a random integer between 0 and 100 (inclusive)
//       const randomInt = Math.floor(Math.random() * 101);
//       row.push(randomInt);
//     }
//     result.push(row);
//   }

//   return result;
// }

// // Example usage:
// const numberOfRows = 4;
// const numberOfColumns = 3;
// const random2DList = generateRandom2DList(numberOfRows, numberOfColumns);
// console.log(random2DList);

// // Q2 Write a function to sort the 2-D list based on column index keeping the rows intact. This function should take two arguments - 2D list created above and column Index 
// function sortByColumnIndex(list, columnIndex) {
//     // Check if the given column index is valid
//     if (columnIndex < 0 || columnIndex >= list[0].length) {
//       throw new Error('Invalid column index');
//     }
  
//     // Create a copy of the 2D list to avoid modifying the original list
//     const sortedList = list.map((row) => [...row]);
  
//     sortedList.sort((a, b) => {
//       // Compare the values of the specified column in each row
//       return a[columnIndex] - b[columnIndex];
//     });
  
//     return sortedList;
//   }
  
//   // Example usage:
//   const originalList = [
//     [21, 4, 79],
//     [6, 34, 43],
//     [15, 54, 23],
//   ];
  
//   const columnIndexToSort = 2;
//   const sortedList = sortByColumnIndex(originalList, columnIndexToSort);
//   console.log(sortedList);
  

//   // Q3 
//   function calculateShares(awards) {
//     const groupedAwards = {};
//     for (const award of awards) {
//       const key = `${award.category}-${award.year}`;
//       if (!groupedAwards[key]) {
//         groupedAwards[key] = { category: award.category, year: award.year, winners: [] };
//       }
//       groupedAwards[key].winners.push({ name: award.name });
//     }
  
//     const prizes = Object.values(groupedAwards).map((group) => {
//       const totalWinners = group.winners.length;
//       const share = 1 / totalWinners;
//       group.winners.forEach((winner) => {
//         winner.share = parseFloat(share.toFixed(4)); // Round to 4 decimal places
//       });
//       return group;
//     });
  
//     return prizes;
//   }
  
//   // Sample Input
//   const awards = [ 
//     { 
//     name: 'James Peebles', 
//     category: 'Physics', 
//     research: 'Theoretical discoveries in physical cosmology', 
//     year: 2019, 
//     }, 
//     { 
//     name: 'Michel Mayor', 
//     category: 'Physics', 
//     research: 'Discovery of an exoplanet orbiting a solar-type star', 
//     year: 2019, 
//     }, 
//     { 
//     name: 'Didier Queloz', 
//     category: 'Physics', 
//     research: 'Discovery of an exoplanet orbiting a solar-type star', 
//     year: 2019, 
//     }, 
//     {
//     name: 'John B. Goodenough', 
//     category: 'Chemistry', 
//     research: 'Development of lithium-ion batteries', 
//     year: 2019, 
//     }, 
//     { 
//     name: 'M. Stanley Whittingham', 
//     category: 'Chemistry', 
//     research: 'Development of lithium-ion batteries', 
//     year: 2019, 
//     }, 
//     { 
//     name: 'Akira Yoshino', 
//     category: 'Chemistry', 
//     research: 'Development of lithium-ion batteries', 
//     year: 2019, 
//     }, 
//     { 
//     name: 'Arthur Ashkin', 
//     category: 'Physics', 
//     research: 'Optical tweezers and their application to biological systems', year: 2018, 
//     }, 
//     { 
//     name: 'Gerard Mourou', 
//     category: 'Physics', 
//     research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, 
//     }, 
//     { 
//     name: 'Donna Strickland', 
//     category: 'Physics', 
//     research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, }, 
//     { 
//     name: 'Frances H. Arnold', 
//     category: 'Chemistry', 
//     research: 'Directed evolution of enzymes', 
//     year: 2018, 
//     }, 
//     { 
//     name: 'George P. Smith', 
//     category: 'Chemistry', 
//     research: 'Phage display of peptides and antibodies.', 
//     year: 2018, 
//     }, 
//     { 
//     name: 'Sir Gregory P. Winter', 
//     category: 'Chemistry', 
//     research: 'Phage display of peptides and antibodies.', 
//     year: 2018, 
//     }, 
//     ]; 
    
  
//   // Calculate shares and generate the required output
//   const prizes = calculateShares(awards);
//   console.log(prizes);
  

//   // Q4 
//   function calculateShareholder(portfolio) {
//     const shareholderMap = {};
  
//     for (const entry of portfolio) {
//       const { name, stock } = entry;
//       if (!shareholderMap[stock]) {
//         shareholderMap[stock] = { stock, name: [], count: 0 };
//       }
//       shareholderMap[stock].name.push(name);
//       shareholderMap[stock].count++;
//     }
  
//     const shareholder = Object.values(shareholderMap);
//     return shareholder;
//   }
  
//   // Input
//   const portfolio = [
//     { name: 'Mark', stock: 'FB' },
//     { name: 'Steve', stock: 'AAPL' },
//     { name: 'Tim', stock: 'AAPL' },
//     { name: 'Steve', stock: 'MSFT' },
//     { name: 'Bill', stock: 'MSFT' },
//     { name: 'Bill', stock: 'AAPL' },
//   ];
  
//   // Calculate shareholder and generate the required output
//   const shareholder = calculateShareholder(portfolio);
//   console.log(shareholder);


//   // Q5 
//   const merge = (a, b) => {
//     return a.concat(b).sort((x, y) => x - y);
//   };
  
//   // Example
//   const a = [1, 3, 5, 7, 8];
//   const b = [9, 3, 2];
//   console.log(merge(a, b)); // Output: [1, 2, 3, 3, 5, 7, 8, 9]
  
//   // Q 6 Sort the arr a =[1,3,6,4,7,8,7] in ascending/descending order without using predefined inbuilt functions. 
//   function bubbleSortAscending(arr) {
//   const n = arr.length;
//   let swapped;

//   do {
//     swapped = false;

//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // Swap elements if they are in the wrong order
//         const temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// }

// const a = [1, 3, 6, 4, 7, 8, 7];
// const sortedAscending = bubbleSortAscending(a.slice()); // Create a copy of 'a' to keep 'a' unchanged
// console.log(sortedAscending); // Output: [1, 3, 4, 6, 7, 7, 8]

// function bubbleSortDescending(arr) {
//     const n = arr.length;
//     let swapped;
  
//     do {
//       swapped = false;
  
//       for (let i = 0; i < n - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//           // Swap elements if they are in the wrong order
//           const temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);
  
//     return arr;
//   }
  
//   const a = [1, 3, 6, 4, 7, 8, 7];
//   const sortedDescending = bubbleSortDescending(a.slice()); // Create a copy of 'a' to keep 'a' unchanged
//   console.log(sortedDescending); // Output: [8, 7, 7, 6, 4, 3, 1]

// Q7 
// const a = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];
// const flattenedArray = a.flat(Infinity);

// console.log(flattenedArray); // Output: [1, 5, 3, 4, 8, 7, 0, 6, 7, 9, 7, 8]
/*  Q8  
Find the sum of the array. 
Find the number of calls made in the calls made 
{const arr = [[1, 2, 3], [0, 1, 1], [3, 45, 7], [1, 1, 1], [4, 6, 7], [3, 45, 7], [3, 45, 7], [1, 1, 1]]; const output = 
sum : [6,2,55,3,17,55,55,3] 
numberOfCalls: 5 
}

*/
// function sumOfArray(arr) {
//     let sumArray = [];
//     let numberOfCalls = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       let subArray = arr[i];
//       let sum = 0;
  
//       for (let j = 0; j < subArray.length; j++) {
//         sum += subArray[j];
//         numberOfCalls++;
//       }
  
//       sumArray.push(sum);
//     }
  
//     return { sum: sumArray, numberOfCalls };
//   }
  
//   const arr = [
//     [1, 2, 3],
//     [0, 1, 1],
//     [3, 45, 7],
//     [1, 1, 1],
//     [4, 6, 7],
//     [3, 45, 7],
//     [3, 45, 7],
//     [1, 1, 1],
//   ];
  
//   const output = sumOfArray(arr);
//   console.log(output);
  

/*
Q9 Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "" 
Input: strs = ["flower","flow","flight"] 
Output: "fl" 
 
*/
// function longestCommonPrefix(strs) {
//     if (!strs || strs.length === 0) {
//       return "";
//     }
  
//     let commonPrefix = strs[0];
  
//     for (let i = 1; i < strs.length; i++) {
//       let currentString = strs[i];
//       let j = 0;
  
//       while (j < commonPrefix.length && j < currentString.length && commonPrefix[j] === currentString[j]) {
//         j++;
//       }
  
//       commonPrefix = commonPrefix.slice(0, j);
  
//       if (commonPrefix === "") {
//         // If at any point commonPrefix becomes empty, no need to continue further
//         break;
//       }
//     }
  
//     return commonPrefix;
//   }
  
//   const strs = ["flower", "flow", "flight"];
//   const result = longestCommonPrefix(strs);
//   console.log(result); // Output: "fl"
  /*
   Q10 - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 
Open brackets must be closed by the same type of brackets. 
Open brackets must be closed in the correct order. 
Example 1: 
Input: s = "(((]]" 
Output: false 
Example 2: 
Input: s = "((((([)]" 
Output: false

  */

// function isValid(s) {
//     const stack = [];
//     const bracketMap = {
//       ')': '(',
//       '}': '{',
//       ']': '[',
//     };
  
//     for (let i = 0; i < s.length; i++) {
//       const char = s[i];
  
//       if (char === '(' || char === '{' || char === '[') {
//         stack.push(char);
//       } else {
//         const lastOpeningBracket = stack.pop();
//         if (lastOpeningBracket !== bracketMap[char]) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0;
//   }
  
//   // Test cases
//   console.log(isValid("(((]]")); // Output: false
//   console.log(isValid("((((([)]")); // Output: false
//   console.log(isValid("(){}[]")); // Output: true
//   console.log(isValid("(){}[[]]")); // Output: true
  

  /* 
  Q11 -Write the code for the question below without using predefined inbuilt functions. 
arr a = [1,5,3,[4,8,7,0,6,[7,9,7,8]]] 

Required output : 
arr a =[1,5,3,4,8,7,0,6,7,9,7,8]

  */
// function flattenArray(arr) {
//     const flattenedArray = [];
  
//     function flattenHelper(arr) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           flattenHelper(arr[i]); // Recursive call for nested arrays
//         } else {
//           flattenedArray.push(arr[i]);
//         }
//       }
//     }
  
//     flattenHelper(arr);
//     return flattenedArray;
//   }
  
//   const a = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];
//   const flattened = flattenArray(a);
//   console.log(flattened); // Output: [1, 5, 3, 4, 8, 7, 0, 6, 7, 9, 7, 8]
  
/* Q 12 const arr = [[1,2,3], [0,1,1], [3,45,7], [1,1,1], [4,6,7], [3,45,7], [3,45,7],[1,1,1] ]
const output = { sum : [6,2,55,3,17,55,55,3], numberOfCalls: 5 } 

*/
// const arr = [[1, 2, 3], [0, 1, 1], [3, 45, 7], [1, 1, 1], [4, 6, 7], [3, 45, 7], [3, 45, 7], [1, 1, 1]];

// function sumAndCountCalls(arr) {
//   let numberOfCalls = 0;

//   function sumHelper(arr) {
//     numberOfCalls++;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         sum += sumHelper(arr[i]); // Recursive call for nested arrays
//       } else {
//         sum += arr[i];
//       }
//     }

//     return sum;
//   }

//   const sumResult = arr.map(sumHelper);

//   return { sum: sumResult, numberOfCalls: numberOfCalls };
// }

// const output = sumAndCountCalls(arr);
// console.log(output);


/* Q13 
write a function to check for string equality between two given strings where # represents a backspace. for example, jaswinder === jasa#winder returns true "" === "ab###" returns true Flat an array without using predefined functions
 */

// function checkStringEquality(str1, str2) {
//     function processString(str) {
//       const stack = [];
//       for (let char of str) {
//         if (char === '#') {
//           stack.pop();
//         } else {
//           stack.push(char);
//         }
//       }
//       return stack.join('');
//     }
  
//     const processedStr1 = processString(str1);
//     const processedStr2 = processString(str2);
  
//     return processedStr1 === processedStr2;
//   }
  
//   console.log(checkStringEquality('jaswinder', 'jasa#winder')); // Output: true
//   console.log(checkStringEquality('', 'ab###')); // Output: true
  /* 14 */
//   function flattenArray(arr) {
//     const flattenedArray = [];
  
//     function flattenHelper(arr) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           flattenHelper(arr[i]); // Recursive call for nested arrays
//         } else {
//           flattenedArray.push(arr[i]);
//         }
//       }
//     }
  
//     flattenHelper(arr);
//     return flattenedArray;
//   }
  
//   const nestedArray = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];
//   const flattened = flattenArray(nestedArray);
//   console.log(flattened); // Output: [1, 5, 3, 4, 8, 7, 0, 6, 7, 9, 7, 8]
  


