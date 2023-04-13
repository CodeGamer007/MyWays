const fizzBuzz = phoneNumber => {
    let number = phoneNumber;
    let temp = 0;
    while (number > 0) {
        let digit = Math.floor(number) % 10;
        temp += digit;
        number /= 10;
    }
    for (let i = 1; i < temp + 1; i++) {
        if ((i % 4 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
        } else if (i % 4 == 0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(9434661470);
