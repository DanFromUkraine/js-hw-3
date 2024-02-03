// для найбільшого числа

const arr = [23, 1, 45, 87, 4, 55, 6];
let theBiggest = 0;
for (let now of arr) { 
 if (now > theBiggest) {
    theBiggest = now;
 }
 console.log(theBiggest);
}
console.log(theBiggest);

// для найменшого числа

let theSmallest = Infinity;
for (let now of arr) { 
    if (now < theSmallest) {
       theSmallest = now;
    }
    console.log(theSmallest);
   }
   console.log(theSmallest);