const lettersRegex = /^[a-zA-Z\s]+$/g


function ofAge(age) {
  if (age) {
    if (age < 18) {
      return "You are underage";
    } else if (age > 25) {
      return "You are an adult"
    } else if (18 <= age <= 25) {
      return "You are a young adult"
    } else {
      return null
    }
  }
}

function voteEligibility(age, nation) {

  if (age >= 18 && nation === 'spanish') {
    return "You are able to vote";
  } else if (age >= 18 && nation !== 'spanish') {
    return "You are not allowed to vote due to your nationality";
  } else if (age < 18 && nation === 'spanish') {
    return "You are not allowed to vote due to your age";
  } else if (age < 18 && nation !== 'spanish') {
    return "You are not allowed to vote due to both age and nationality";
  } else {
    return null
  }
}

function numberInput(msg) {
  let numStr = prompt(msg)
  return validateNumber(numStr) ? Number(numStr) :
    null
}

function ageInput(msg) {
  let numStr = prompt(msg)
  return validateAge(numStr) && numStr > 0 ?
    Number(numStr) :
    null
}

function wordInput(msg) {
  let wordStr = prompt(msg)
  return validateLetters(wordStr) ? wordStr : null
}

function validateNumber(str) {
  return str === `${Number(str)}`
}

function validateAge(str) {
  return str === `${Number(str)}` && str >= 0
}

function validateLetters(str) {
  return str.match(lettersRegex)
}

function parseNation(str) {
  return str.toLowerCase().replaceAll(" ", "")
}

function exercise1() {
  //Exercise 1
  const str = "Hello";
  const num = 1;
  const boolean = true;

  console.log(typeof(str));
  console.log(typeof(num));
  console.log(typeof(boolean));

  const numConverted = num.toString();
  console.log(typeof(numConverted));
}

function exercise2() {
  // Your code here
  console.log("Hola Mundo")
  alert("Soy el primer script")
}

function exercise3() {
  let num1 = 1;
  let num2 = 2;

  console.log(num1 + num2)
  console.log(num1 - num2)
  console.log(num1 * num2)
  console.log(num1 / num2)
  console.log(++num1)
  console.log(--num2)
}

function exercise4() {
  let str = "123"
  let num = 123

  console.log(str + num)
}

function exercise5()  {
  let num1 = 1;
  let num2 = 2;

  console.log(num1 > num2)
  console.log(num1 < num2)
  console.log(num1 === num2)
  console.log(num1 !== num2)
  console.log(num1 <= num2 && num2 !== num1)
  console.log(num1 <= num2 || num2 !== num1)
  console.log(!num1 <= num2)
}

function exercise6() {
  let num = null
  const numMsg = 'Enter a number'

  do {
    num = numberInput(numMsg)
    console.log(num)

    if (num !== null) {
      num !== 0 ? num > 0 ?
          alert("The number is positive") :
          alert("The number is negative") :
        alert("The number is zero")
    } else {
      alert("This is not a valid number")
    }
  }
  while (!num)
}

function exercise7() {
  alert(
    `Hola Mundo!\n
    Qué fácil es incluir 'comillas simples'\n
     y "comillas dobles"`)
}

function exercise8() {
  let age = null
  let msg = "Enter your age"

  do {
    age = ageInput(msg)

    if (age) {
      alert(ofAge(age))
    } else {
      alert("The input is not a valid age")
    }
  }
  while (!age)
}

function exercise9() {
  const ageMsg = "Enter your age"
  const nationMsg = "Enter your nationality"
  let age
  let nation

  do {
    age = ageInput(ageMsg)

    if (age) {
      nation = wordInput(nationMsg)

      if (nation) {
        alert(voteEligibility(age, parseNation(nation)))
      } else {
        alert("Please enter a valid nation")
      }
    } else {
      alert("Please enter a valid age")
    }
  } while (!age || !nation)
}

function exercise10(){
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i)
    }
  }
}

function exercise11() {
  let num = 1
  const numMsg = "Please enter a number"

  while (num >= 0) {
    num = numberInput(numMsg)
    if (num === null) {
      alert("Please enter a valid number")
    }
  }
}

function exercise12() {
  let password
  do {
    password = prompt("Enter your password")
  } while (password !== '1234')
  alert("Correct password!")
}

function exercise13() {
  let num
  const msg = "Please enter a number"

  do {
    num = numberInput(msg)
    if (num === null) {
      alert("Please enter a valid number")
    }
  } while (num === null)
}

function exercise14() {
  let num
  const msg = "Please enter a number"

  do {
    num = numberInput(msg)

    if (num !== null) {
      if (num % 2 === 0) {
        alert("This number is even")
      } else {
        alert("This number is odd")
      }
    } else {
      alert("Please enter a valid number")
    }
  } while (num === null)
}

function exercise15() {
  let numero1 = 5
  let numero2 = 8

  if (numero1 <= numero2) {
    alert("numero1 no es mayor que numero2")
  }

  if (numero2 > 0) {
    alert("numero2 es positivo")
  }

  if (numero1 !== 0) {
    alert("numero1 es negativo o distinto de cero")
  }

  if (numero1++ < numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
  }
}

function exercise16() {
  //Here we declare variables that will be used in the function
  const ageMsg = "Enter your age"
  const nationMsg = "Enter your nationality"
  let age
  let nation

  //We begin a do while loop
  do {
    //We assign age the value of the input or null if it is not valid
    age = ageInput(ageMsg)

    //If age is valid, we then request the user to input their nationality
    if (age) {
      //The nationality is set as the input or null if not valid
      nation = wordInput(nationMsg)

      //If nationality is valid, both age and nationality are sent to the
      //voteEligibility function to find if the user is eligible
      if (nation) {
        //This function returns a string depending on the user's eligibility
        alert(voteEligibility(age, parseNation(nation)))
        //Displays an error if the nationality wasn't entered correctly
      } else {
        alert("Please enter a valid nation")
      }
      //Displays an error if the age wasn't entered correctly
    } else {
      alert("Please enter a valid age")
    }
    //Exits the do while loop when both a valid age and nationality have been entered
  } while (!age || !nation)

  //Sample outcomes -
  //input age: 12, nationality: spanish
  //outcome = "You are not allowed to vote due to your age"
  //expected outcome

  //input = age: 24, nationality: usa
  //outcome = "You are not allowed to vote due to your nationality"
  //expected outcome

  //input = age:asd, nationality: undefined
  //outcome = "Please enter a valid age"
  //expected outcome

  //input = age: 15, nationality: 4213
  //outcome = Please enter a valid nation")
}

function exercise17() {
  let count = 0
  const msg = "Please enter your age"

  for (let i = 0; i < 5; i++) {
    let age

    do {
      age = ageInput(msg)

      if (age && age >= 18) {
        count += 1
      }
    } while (!age)
  }
}

function exercise18() {
  let msg = "Please enter a multiple digit number"
  let num
  let total = 0

  do {
    num = numberInput(msg)
    if (num !== null && num > 9) {
      for (let number in num.toString()) {
        total += number
      }
    } else {
      alert("Please enter a valid number")
    }
  } while (num === null)

  alert(total)
}

function exercise19() {
  let msg = "Enter a number"
  let num
  let total

  do {
    num = numberInput(msg)
    total = num

    if (num !== null) {
      for (num; num > 0; num--) {
        total *= num
      }
    }
  } while (num === null)
}

function exercise20() {
  let msg = "Enter a a word or phrase"
  let str

  do {
    str = wordInput(msg)

    if (str) {
      let reversedStr = str.split('').reverse().join('')

      if (str === reversedStr) {
        alert("The message you entered is a palindrome")
      }
    } else {
      alert("Please enter a valid message")
    }
  } while (str === null)
}