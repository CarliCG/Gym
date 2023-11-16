/*Dado dos valores enteros mayores que 0, devuelve el valor que esté más 
cerca de 21 sin pasarse. Retorna 0 si ambos superan 21*/

//Deterinar cual numero esta mas cerca de 21
function blackjack(a, b) {
    const A = Math.abs(a - 21); 
    /*Math.abs convierte cualquier número negativo en su equivalente positivo y 
    deja los números positivos sin cambios */
    const B = Math.abs(b - 21);

    if (a > 21 && b > 21) {
        return 0;
    }

    if (a > 21) {
        return b;
//a se pasa de 21. En este caso, el código devuelve el valor de b
    } else if (b > 21) {
        return a;
//b se pasa de 21, y en este caso, el código devuelve el valor de a
    } else {
        if (A < B) {
            // Si A es menor que B
            return a;
        } else {
            // Si A no es menor que B (podría ser mayor o igual)
            return b;
        }
    }
}


