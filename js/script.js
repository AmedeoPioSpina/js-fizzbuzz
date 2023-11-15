for(let i = 0; i < 100; i++){
    let currNum = i+1;
    if(currNum % 3 === 0 && currNum % 5 === 0){
        console.log(`${currNum} FizzBuzz`);
    }
    else if(currNum % 3 === 0){
        console.log(`${currNum} Fizz`);
    }
    else if(currNum % 5 === 0){
        console.log(`${currNum} Buzz`);
    }
}