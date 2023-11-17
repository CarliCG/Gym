/*implementar una función de diferencia, la cual resta el contenido de un arreglo de otro y devuelve el resultado.

Recuerda que debes eliminar todos los valores del arreglo a, que estén presentes en el arreglo b manteniendo el orden*/

function arrayDiff(a, b) {
    // Filtrar los elementos de la lista a que no están presentes en la lista b.
    // Se utiliza la función de filtro y la función de inclusión para realizar la comparación.
    // Devolver el resultado filtrado.
    return a.filter(element => !b.includes(element));
  }
  //La función de filtro crea una nueva matriz que contiene solo los elementos que cumplen con la condición especificada.
  //El operador de negación (!) invierte el resultado de b.includes(element). Entonces, !b.includes(element) será true si el elemento NO está presente en la matriz b, y false si sí lo está.
