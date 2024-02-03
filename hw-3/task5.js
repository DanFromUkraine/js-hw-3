const arr1 = [5,10,15,20];
const arr2 = [10, 20, 30];

let totalResult = 0;
for (let result of arr1) {
    totalResult += result;
}
for(let result of arr2) {
    totalResult += result;
}
    console.log(totalResult);

    // Я думаю це найоптимальнійший спосіб вирішення дилеми різної довжини. Можна було б написати умову, що якщо масив1 < масив2, то виконуємо цикл1, якщо ні, то цикл 2. Однак тоді кількість стрік зростає у 1.5 - 2 рази

