let nota = 100

if (nota >= 90 && nota <= 100) {
    console.log('Parabéns, você tirou nota A')
} else if (nota >= 80 && nota <= 89) {
    console.log('Parabéns, você tirou nota B')
} else if (nota >= 70 && nota <= 79) {
    console.log('Você tirou nota C')
} else if (nota >= 60 && nota <= 69) {
    console.log('Você tirou nota D')
} else if (nota < 60) {
    console.log('Você tirou nota F')
} else if (nota > 100) {
    console.log ('Nota invalida')
}