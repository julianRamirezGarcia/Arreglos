let arr = [1, 2, 3, 4, 5, 6];
let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

let arr1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr[i]);
}

let arr2 = [1, 2, 3, 4, 5, 6];
let copiedArr = [];

for (let i = 0; i < arr2.length; i++) {
  copiedArr.push(arr[i] + 1);
}

console.log(copiedArr);

let arr3 = [1, 2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < arr3.length; i++) {
  total += arr3[i];
}

let average = total / arr3.length;
console.log(average);

let arr4 = [
  [
    ["%", 7, true, "#"],
    ["&", 55, false, "="],
  ],
  [
    [false, 0, 99, "?"],
    [true, 1000, "@", "¡"],
  ],
  [
    [44, 55, 66, 77],
    [1, 2, 3, 4],
  ],
];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j]);
  }
}

let arr5 = [
  [
    ["%", 7, true, "#"],
    ["&", 55, false, "="],
  ],
  [
    [false, 0, 99, "?"],
    [true, 1000, "@", "¡"],
  ],
  [
    [44, 55, 66, 77],
    [1, 2, 3, 4],
  ],
];

arr5.forEach((subArray) => {
  subArray.forEach((element) => {
    console.log(element);
  });
});

let arr6 = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];

for (let i = 0; i < arr6.length; i++) {
  for (let j = 0; j < arr6[i].length; j++) {
    if (arr6[i][j] % 2 !== 0) {
      console.log(arr6[i][j]);
    }
  }
}

let arr7 = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];
let sum = 0;

for (let i = 0; i < arr7.length; i++) {
  for (let j = 0; j < arr7[i].length; j++) {
    sum += arr7[i][j];
  }
}

console.log(sum);

