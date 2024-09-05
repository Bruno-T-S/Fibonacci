function fibonacci(n)
{
    let fib =1
    let fib_anterior = 0
    let fib_resultado = 0
    while(fib_resultado <=n)
    {
        if(fib_resultado==0)
        {
            fib_resultado = 1
        }
        else
        {
            fib_resultado = fib+fib_anterior
            fib_anterior = fib
            fib = fib_resultado
        }
        console.log(fib_resultado)
    }
    console.log("O primeiro número de Fibonacci maior que " + n + " é: " + fib_resultado)
}

fibonacci(3) //resulta em 5
