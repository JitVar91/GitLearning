let isActive: boolean = true;
console.log(isActive);

let numberArray : number[] = [1, 2, 3];
console.log(numberArray);

let data : any = { id: 1, name: "John" };
console.log(data);
data=42;
console.log(data);  

function add(a:number,b:number):number  
{
    return a+b;
}   

console.log(add(5,10));

let user:{name:string, age:number} ={name:"Bob", age:25};
console.log(user);