const arr = ['1-Python', '2-PHP', '3-Java', '4-C++', '5-C', '6-C#'];
let string;
for (let current of arr) { 
    string = current.split ('-');
    string.shift();
    arr.splice(arr.indexOf(current), 1, string);
}

console.table(arr);

// якщо прям дуже заморочитись, можна прибрати змінну string і все зробити на current. Однак це буде доволі складно, бо current не є функцією, на що натякає помилка.


