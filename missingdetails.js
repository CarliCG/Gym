/*Escribe una función que:

Agregue la propiedad question a cada objeto del array de entrada donde el desarrollador no ha proporcionado 
los detalles relevantes (aquellas propiedades en las que el valor es null ). El valor de la propiedad question debe ser el siguiente string:

Hi, could you please provide your <property name>.

La función debe retornar sólo los desarrolladores con detalles faltantes: */

function askForMissingDetails(list) {
    // Filtrar los desarrolladores con detalles faltantes (propiedades con valor null).
    const developersWithMissingDetails = list.filter(dev => {
        //dev es simplemente un nombre de variable utilizado para representar cada elemento (desarrollador) del array durante el proceso de filtrado. 
        const missingDetails = Object.keys(dev).filter(key => dev[key] === null);
        // // Obtener las claves (propiedades) del objeto actual con valores null.
        return missingDetails.length > 0;
    });

    // Agregar la propiedad question a cada objeto del array filtrado.
    developersWithMissingDetails.forEach(dev => {
        const missingDetails = Object.keys(dev).filter(key => dev[key] === null);
        dev.question = `Hi, could you please provide your ${missingDetails.join(' or ')}.`;
    });

    return developersWithMissingDetails;
}

    //----- JC ----//
    // Pese a que tu implementación no es mala,
    // aquí te dejo un ejemplo de como realizarlo
    // sin utilizar un método compuesto como filter

   /* const propertys = Object.keys(list[0]);
    const answer = [];

    for (let i = 0; i < list.length; i++) {
        const myNull = list[i];

        for (let j = 0; j < propertys.length; j++) {
            if (list[i][propertys[j]] === null) {
                myNull.question = `Hi, could you please provide your ${[propertys[j]]}.`;
                answer.push(myNull);
            }
        }
    }

    return answer;

*/