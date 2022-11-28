const salario = prompt(`Ingrese su salario`)
Number(salario)
alert(`Tu salario es $${salario}`)

let cuotaIdeal = salario * 0.20
let interesMinimo = 2
let cuotasMinimas = 12

function prestamoMaximo ( prestamo, cuota, interes ) {
    prestamoIdeal = ( prestamo * cuota ) * interes
}
prestamoMaximo( cuotaIdeal, cuotasMinimas, interesMinimo )
alert( `Tu prestamo ideal es $${prestamoIdeal}` )

let prestamoSolicitado = prompt(`¿Cuanto deseas pedir de prestamo?`)
Number(prestamoSolicitado)
alert(`Tu prestamo solicitado es $${prestamoSolicitado}`)

while ( prestamoSolicitado > prestamoIdeal ) {
    prestamoSolicitado = prompt( `Tu prestamo es mayor al maximo que puedes pedir en base a tu sueldo.
    Por favor ingresa un nuevo monto de prestamo` )
}

let cuotasSolicitadas = prompt(`¿En cuantas cuotas quieres pedir tu prestamo?`)
Number( cuotasSolicitadas )
alert( `Tus cuotas solicitadas son ${cuotasSolicitadas} cuotas` )

let interesCuotas = 1.2

if ( cuotasSolicitadas <= 12 ) {
    interesCuotas = 1.2
} else if ( cuotasSolicitadas > 12 && cuotasSolicitadas <= 24 ) {
    interesCuotas = 1.3
} else if ( cuotasSolicitadas > 24 && cuotasSolicitadas <= 36 ) {
    interesCuotas = 1.5
} else if ( cuotasSolicitadas > 36 && cuotasSolicitadas <= 48 ) {
    interesCuotas = 1.7
} else {
    interesCuotas = 2
}

alert(`El interes que aplica para las ${cuotasSolicitadas} cuotas es de ${interesCuotas}% sobre el prestamo solicitado`)

function calculadoraDeCuotas ( prestamo, cuotas, interes ) {
    cuotasPrestamo = ( prestamo / cuotas ) * interes
}
calculadoraDeCuotas( prestamoSolicitado, cuotasSolicitadas, interesCuotas )

alert( `Resultados del simulador: El prestamo solicitado es de $${prestamoSolicitado}, la cantidad de cuotas es de ${cuotasSolicitadas}, el interes que se aplica al prestamo es de ${interesCuotas}% y el valor de cada cuota es de $${cuotasPrestamo}` )