const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const lastLetter = word => word.slice(-1);

function FizzBuzz(n){
    let i = 1;
    while(i < n){
        if(i%3===0 && i%5===0)console.log("FizzBuzz\n")
        else if(i%5===0)console.log("Buzz\n")
        else if(i%3===0)console.log("Fizz\n")
        else console.log(i)
        i++;
    }

}

FizzBuzz(parseInt(prompt("Enter an integer: ")));