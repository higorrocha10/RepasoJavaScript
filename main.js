// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let num1 = Number(prompt("Introduzca el número: "))
let num2 = Number(prompt("Introduzca el segundo número: "))
let result = num1 + num2
alert(`El resultado total es:  ${result}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 30

if (typeof isNumber == "number") {
  alert("Es un número!")
} else {
  alert("No es un número, es una string.")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = "Hola Hugo"

if (typeof isString == "string") {
  alert("Es una String. ")
} else {
  alert("No es una string, es un número. ")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBolean = "Hola bebe"

if (typeof isBolean == "boolean") {
  alert("Es un boolean.")
} else {
  alert("No es un boolean.")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let subtrOne = 40
let subtraTwo = 20

let result2 = subtrOne - subtraTwo
alert(result2)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multi = subtrOne * subtraTwo
alert(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let division = subtrOne / subtraTwo
alert(division)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let isPar = 20

if (isPar % 2 == 0) {
  alert("Es par")
} else {
  alert("Es impar")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let isImpar = 15

if (isImpar % 2 != 0) {
  alert("Es un número IMPAR.")
} else {
  alert("Es un número PAR. ")
}
