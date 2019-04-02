// Задача. Дано масив років працівників. Визначити скільки серед них є пенсіонерів.

var arr = [20,46,65,32,70,59]


function years (arr){
    let count = 0;
    for(let i=0;i<arr; i++)
 if(arr[i]>60)
    count++;

return  count;
}

// Задача. Дано масив цін на товари. До цін, які більші за 1000грн. нарахувати скидку 20%.

let prices = [541, 1200, 2455, 312, 481]; 

function count(prices){
for(let i =0;i<prices;i++){
if(prices[i]>1000)
prices[i]/100*20;
}
}

// Задані координати вершин трикутника. Знайти його периметр та площу, за допомогою підпрограм.


let a = 13;
let b = 7;
let c = 11;

let p ;
function perimeter(a,b,c){

p = a+b+c;
}
let s;
function area (p){

    s = Maths.sqrt(p*(p-a)*(p-b)*(p-c));
}


